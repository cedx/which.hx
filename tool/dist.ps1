#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)

tool/clean.ps1
tool/version.ps1
tool/build.ps1

node_modules/.bin/ncc build bin/which.js --minify --out=var
@("#!/usr/bin/env node") + (Get-Content var/index.js) | Out-File bin/which.js
if (-not $IsWindows) { chmod +x bin/which.js }

Remove-Item lib/index.php
foreach ($item in Get-ChildItem lib/php) {
	if (-not ("Program.php", "which" -contains $item.Name)) { Remove-Item $item -Recurse }
}
