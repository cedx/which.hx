#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)
foreach ($item in "js", "neko", "php") { haxe --no-traces "build_$item.hxml" }
