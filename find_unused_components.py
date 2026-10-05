import os

src_dir = r"D:\the-startcity\src"

# 1. Read all files in src/
code_files = []
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.css', '.js')):
            code_files.append(os.path.join(root, f))

# 2. Get list of component files
components = []
component_dir = r"D:\the-startcity\src\components"
for root, dirs, files in os.walk(component_dir):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            rel_name = os.path.basename(f)
            # Remove extension to get the module name
            mod_name = os.path.splitext(rel_name)[0]
            components.append((os.path.join(root, f), mod_name, rel_name))

print(f"Found {len(components)} component files in src/components/.")

# Read code contents of all files except the component file itself
unused_components = []
for c_path, mod_name, filename in components:
    is_used = False
    
    # Exclude components/ui folder components from being checked against themselves
    # Or just search in other files
    for path in code_files:
        if os.path.abspath(path) == os.path.abspath(c_path):
            continue
            
        try:
            with open(path, 'r', encoding='utf-8') as f_obj:
                content = f_obj.read()
                # Check for import from .../mod_name
                # or check for <mod_name
                if f"import" in content and mod_name in content:
                    is_used = True
                    break
                if f"<{mod_name}" in content:
                    is_used = True
                    break
        except Exception as e:
            pass
            
    # Check special exclusions
    if filename.lower() in ('navigation.tsx', 'footer.tsx', 'contactform.tsx'):
        is_used = True
        
    if not is_used:
        unused_components.append((c_path, filename))

print(f"Unused components: {len(unused_components)}")
for path, name in sorted(unused_components):
    print(f"  - {name} ({path})")
