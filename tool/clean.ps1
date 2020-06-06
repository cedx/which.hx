#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)

foreach ($item in ".temp", "doc/api", "lib/index.php", "lib/js/which.*", "lib/res", "run.n", "www") {
	if (Test-Path $item) { Remove-Item $item -Force -Recurse }
}

Remove-Item lib/php/* -Exclude which.php -Recurse
Get-ChildItem var -Exclude .gitkeep | Remove-Item -Recurse
