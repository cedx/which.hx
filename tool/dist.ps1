#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)

tool/clean.ps1
tool/version.ps1
tool/build.ps1

npm run dist
@("#!/usr/bin/env node") + (Get-Content bin/which.js) | Out-File bin/which.js
if (-not $IsWindows) { chmod +x bin/which.js }

Remove-Item lib/index.php
Remove-Item lib/php/* -Exclude tink, which, which.php -Force -Recurse
Remove-Item lib/php/tink/* -Exclude cli -Force -Recurse
Remove-Item lib/php/tink/cli/* -Exclude *0.php -Force -Recurse
