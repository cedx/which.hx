#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)

haxelib install all --always
haxelib update --always
haxelib set tink_core 1.27.1 --always

composer update --no-interaction
npm install --production=false
npm update --dev
