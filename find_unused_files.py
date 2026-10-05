import os
import re

src_dir = r"D:\the-startcity\src"
public_dir = r"D:\the-startcity\public"

# 1. Read all files in src/ to search for asset paths
code_contents = []
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.css', '.js')):
            path = os.path.join(root, f)
            try:
                with open(path, 'r', encoding='utf-8') as file_obj:
                    code_contents.append(file_obj.read())
            except Exception as e:
                print(f"Error reading code file {path}: {e}")

# Combine all code content to search easily
all_code = "\n".join(code_contents)

# 2. Scan public/ for assets
all_assets = []
for root, dirs, files in os.walk(public_dir):
    for f in files:
        # Exclude temporary system files if any
        if f.startswith('~$') or f == '.DS_Store':
            continue
        rel_path = os.path.relpath(os.path.join(root, f), public_dir)
        # Standardize path separators to forward slash
        rel_path_slash = rel_path.replace('\\', '/')
        all_assets.append((os.path.join(root, f), rel_path_slash, f))

print(f"Found {len(all_assets)} assets in public/.")

unused_assets = []
used_assets_count = 0

for abs_path, rel_path, filename in all_assets:
    # Check if the filename or relative path is mentioned in the code
    # We check:
    # - filename (e.g. 'logo.png')
    # - rel_path (e.g. 'images/logo.png')
    # - rel_path with leading slash (e.g. '/images/logo.png')
    
    # We do a case-insensitive search
    rel_pattern = rel_path.lower()
    file_pattern = filename.lower()
    
    # Check in code
    is_used = (rel_pattern in all_code.lower()) or (file_pattern in all_code.lower())
    
    # Special exception for favicon.ico and typical static Next.js config images
    if filename.lower() in ('favicon.ico', 'robots.txt', 'sitemap.xml'):
        is_used = True
        
    if is_used:
        used_assets_count += 1
    else:
        unused_assets.append((abs_path, rel_path))

print(f"Used assets: {used_assets_count}")
print(f"Unused assets: {len(unused_assets)}")
print("\nList of unused assets:")
for abs_path, rel_path in sorted(unused_assets):
    print(f"  - {rel_path} ({os.path.getsize(abs_path)} bytes)")
    
# Let's save the list to a JSON file for review or deletion
import json
with open("unused_assets.json", "w", encoding="utf-8") as f:
    json.dump([item[0] for item in unused_assets], f, indent=2)
