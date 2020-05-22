#!/usr/bin/env pwsh
Set-StrictMode -Version Latest
Set-Location (Split-Path $PSScriptRoot)

$version = (Get-Content haxelib.json | ConvertFrom-Json).version
haxe --define doc-gen --xml var/api.xml build.hxml
haxelib run dox `
	--define description "Find the instances of an executable in the system path. Like the `which` Linux command." `
	--define logo "https://api.belin.io/which.hx/favicon.ico" `
	--define source-path "https://git.belin.io/cedx/which.hx/src/branch/master/src" `
	--define themeColor 0xffc105 `
	--define version $version `
	--define website "https://belin.io" `
	--input-path var `
	--output-path doc/api `
	--title "Which.hx" `
	--toplevel-package which

Copy-Item doc/img/favicon.ico doc/api
mkdocs build --config-file=etc/mkdocs.yaml
