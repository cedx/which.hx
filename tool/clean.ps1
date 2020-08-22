#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)

foreach ($item in "doc/api", "lib/index.php", "lib/js/which.*", "lib/res", "run.n", "www") {
	if (Test-Path $item) { Remove-Item $item -Force -Recurse }
}

Remove-Item lib/php/* -Exclude which.php -Force -Recurse
Remove-Item var/* -Exclude .gitkeep -Force -Recurse
