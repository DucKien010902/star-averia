Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('d:\the-startcity\public\images\matbang.png')
Write-Host "matbang.png: $($img.Width) x $($img.Height)"
$img.Dispose()
$img2 = [System.Drawing.Image]::FromFile('d:\the-startcity\public\images\mat_bang.jpg')
Write-Host "mat_bang.jpg: $($img2.Width) x $($img2.Height)"
$img2.Dispose()
