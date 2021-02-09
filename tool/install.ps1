#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)

composer update
lix download
npm install --production=false
npm update --dev
