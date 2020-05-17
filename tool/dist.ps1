#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)

tool/clean.ps1
tool/version.ps1
haxe build.hxml

foreach ($item in Get-ChildItem lib/php) {
	if (-not ("tink", "which" -contains $item.BaseName)) { Remove-Item $item -Recurse }
}
