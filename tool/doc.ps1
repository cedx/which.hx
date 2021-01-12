#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)

$version = (Get-Content haxelib.json | ConvertFrom-Json).version
haxe build_doc.hxml
haxelib run dox `
	--define description "Find the instances of an executable in the system path, in Haxe, JavaScript and PHP. Like the `which` Linux command." `
	--define source-path "https://git.belin.io/cedx/which.hx/src/branch/main/src" `
	--define themeColor 0xffc105 `
	--define version $version `
	--define website "https://docs.belin.io/which.hx" `
	--input-path var `
	--output-path docs/api `
	--title "Which.hx" `
	--toplevel-package which

Copy-Item docs/favicon.ico docs/api
