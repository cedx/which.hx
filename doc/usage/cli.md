---
path: src/branch/main
source: src/which/Program.hx
---

# Command line interface
Start by installing the `which` executable globally with your package manager.

=== "Haxe"
	From a command prompt, run:

		:::shell
		haxelib --global install which

	Now in your terminal, you can use:

		:::shell
		haxelib run which --version

=== "JavaScript"
	From a command prompt, run:

		:::shell
		npm install --global @cedx/which.hx

	Now in your terminal, you can use:

		:::shell
		which --version

	!!! tip
		Consider adding the [`npm install --global`](https://docs.npmjs.com/files/folders) executables directory to your system path.

=== "PHP"
	From a command prompt, run:

		:::shell
		composer global require cedx/which.hx

	Now in your terminal, you can use:

		:::shell
		composer global exec which --version

	!!! tip
		Consider adding the [`composer global`](https://getcomposer.org/doc/03-cli.md#global) executables directory to your system path.

Then invoke it to find the instances of an executable command:

``` shell
$ which --help

Find the instances of an executable in the system path.

	<command> : The name of the command to find.

	Flags:
		    --all, -a : List all instances of executables found (instead of just the first one).
		   --help, -h : Output usage information.
		 --silent, -s : Silence the output, just return the exit code (0 if any executable is found, otherwise 1).
		--version, -v : Output the version number.
```

For example:

=== "Haxe"
		:::shell
		haxelib run which haxe
		# /usr/bin/haxe

		haxelib run which --all haxe
		# /usr/bin/haxe
		# /usr/local/bin/haxe

		haxelib run which --silent haxe
		# Exit code 0 if "haxe" is found, otherwise 1

=== "JavaScript"
		:::shell
		which node
		# /usr/bin/node

		which --all node
		# /usr/bin/node
		# /usr/local/bin/node

		which --silent node
		# Exit code 0 if "node" is found, otherwise 1

=== "PHP"
		:::shell
		which php
		# /usr/bin/php

		which --all php
		# /usr/bin/php
		# /usr/local/bin/php

		which --silent php
		# Exit code 0 if "php" is found, otherwise 1
