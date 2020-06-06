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
Get-ChildItem lib/php -Exclude tink, which, which.php | Remove-Item -Recurse
Get-ChildItem lib/php/tink -Exclude cli | Remove-Item -Recurse
Get-ChildItem lib/php/tink/cli -Exclude *0.php | Remove-Item -Recurse
