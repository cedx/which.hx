#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)

foreach ($item in "docs/api", "lib/index.php", "lib/js/bundle.*", "lib/res") {
	if (Test-Path $item) { Remove-Item $item -Force -Recurse }
}

Remove-Item lib/php/* -Exclude adapter.php -Force -Recurse
Remove-Item var/* -Exclude .gitkeep -Force -Recurse
