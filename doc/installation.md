# Installation

## Requirements
Before installing **Which.hx**, you need to make sure you have either
[Haxe](https://haxe.org), [Node.js](https://nodejs.org) or [PHP](https://www.php.net) up and running.

You can verify if you're already good to go with the following commands:

=== "Haxe"
		:::shell
		haxe --version
		# 4.1.3

		haxelib version
		# 4.0.2

=== "JavaScript"
		:::shell
		node --version
		# v14.5.0

		npm --version
		# 6.14.7

=== "PHP"
		:::shell
		php --version
		# PHP 7.4.8 (cli) (built: Jul  9 2020 11:30:33) ( NTS Visual C++ 2017 x64 )

		composer --version
		# Composer version 1.10.9 2020-07-16 12:57:00

!!! info
	If you plan to play with the package sources, you will also need
	[PowerShell](https://docs.microsoft.com/en-us/powershell) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material).

## Installing with a package manager

=== "Haxe"
	From a command prompt, run:

		:::shell
		haxelib install which

	Now in your [Haxe](https://haxe.org) code, you can use:

		:::haxe
		import which.FinderException;
		import which.FinderTools;

=== "JavaScript"
	From a command prompt, run:

		:::shell
		npm install @cedx/which.hx

	Now in your [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) code, you can use:

		:::js
		// CommonJS module.
		const {which} = require("@cedx/which.hx");

		// ECMAScript module.
		import {which} from "@cedx/which.hx";

=== "PHP"
	From a command prompt, run:

		:::shell
		composer require cedx/which.hx

	Now in your [PHP](https://www.php.net) code, you can use:

		:::php
		<?php
		use function which\which;
		use which\FinderException;
