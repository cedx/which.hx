#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)
haxe share/build.hxml --define eval-call-stack-depth=1500 --run Run @args
