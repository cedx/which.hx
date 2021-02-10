#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)

foreach ($item in "hl", "js", "jvm", "php") { haxe "build_$item.hxml" }
haxe run.hxml
