#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)

haxelib newrepo
haxelib install checkstyle
haxelib install dox
haxelib install all --always
haxelib set hxjava 3.2.0 --always
haxelib set tink_core 1.27.1 --always

composer install --no-interaction
npm install --production=false
