#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)
foreach ($item in "js", "php") { haxe "build_$item.hxml" }
