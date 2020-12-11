#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)

foreach ($item in "eval", "hl", "js", "jvm", "php") {
	Write-Host "> Testing '$item' target..."
	haxe "test_$item.hxml"
}
