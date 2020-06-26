---
path: src/branch/main
source: src/which/FinderTools.hx
---

# Application programming interface
This package provides a single function, `which()`, allowing to locate a command in the system path.

=== "Haxe"
	The function is provided by the `FinderTools` class,
	that can acts as a [static extension](https://haxe.org/manual/lf-static-extension.html) to the `String` class
	(with the `using which.FinderTools` statement).

	It returns a [`Promise`](https://promisesaplus.com) that resolves with the absolute path of the first instance of the executables found.
	If the command could not be located, the promise rejects with a `FinderException`.

		:::haxe
		import which.FinderException;
		import which.FinderTools;

		class Main {
			static function main() {
				FinderTools.which("foobar").then(
					path -> Sys.println('The command "foobar" is located at: $path'),
					e -> Sys.println('The command "${(e: FinderException).command}" was not found.')
				);
			}
		}

	!!! info
		The `Promise` implementation is provided by the [`thenshim`](https://lib.haxe.org/p/thenshim) package.

=== "JavaScript"
	The function returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
	that resolves with the absolute path of the first instance of the executables found.
	If the command could not be located, the promise rejects with a `FinderException`.

		:::js
		import {which} from "@cedx/which.hx";

		async function main() {
			try {
				const path = await which("foobar");
				console.log(`The command 'foobar' is located at: ${path}`);
			}

			catch (error) {
				console.log(`The command '${error.command}' was not found.`);
			}
		}

=== "PHP"
	The function returns a `string` specifying the absolute path of the first instance of the executables found.
	If the command could not be located, a `FinderException` is thrown.

		:::php
		<?php
		use function which\which;
		use which\FinderException;

		function main(): void {
			try {
				$path = which("foobar");
				print "The command 'foobar' is located at: $path";
			}

			catch (FinderException $e) {
				print "The command '{$e->command}' was not found.";
			}
		}

## Options
The behavior of the `which()` function can be customized using the following options.

### **all**: Bool
A value indicating whether to return all executables found, instead of just the first one.

If you pass `true` as option value, the function will return an array of strings providing all paths found, instead of a single string:

=== "Haxe"
		:::haxe
		using which.FinderTools;

		class Main {
			static function main() {
				"foobar".which({all: true}).then((paths: Array<String>) -> {
					Sys.println("The command 'foobar' was found at these locations:");
					for (path in paths) Sys.println(path);
				});
			}
		}

=== "JavaScript"
		:::js
		import {which} from "@cedx/which.hx";

		async function main() {
			const paths = await which("foobar", {all: true});
			console.log("The command 'foobar' was found at these locations:");
			for (const path of paths) console.log(path);
		}

=== "PHP"
		:::php
		<?php
		use function which\which;

		function main(): void {
			$paths = which("foobar", ["all" => true]);
			print "The command 'foobar' was found at these locations:" . PHP_EOL;
			foreach ($paths as $path) print $path . PHP_EOL;
		}

### **extensions**: Array&lt;String&gt;
An array of strings specifying the list of executable file extensions.
On Windows, defaults to the list of extensions provided by the `PATHEXT` environment variable.

=== "Haxe"
		:::haxe
		"foobar".which({extensions: [".foo", ".exe", ".cmd"]});

=== "JavaScript"
		:::js
		which("foobar", {extensions: [".foo", ".exe", ".cmd"]});

=== "PHP"
		:::php
		<?php
		which("foobar", ["extensions" => [".foo", ".exe", ".cmd"]]);

!!! tip
	The `extensions` option is only meaningful on the Windows platform, where the executability of a file is determined from its extension.

### **onError**: (command: String) -> Dynamic
By default, when the specified command cannot be located, a `FinderException` is raised. You can disable this exception by providing your own error handler:

=== "Haxe"
		:::haxe
		using which.FinderTools;

		class Main {
			static function main() {
				"foobar".which({onError: command -> ""}).then((path: String) -> {
					if (path.length == 0) Sys.println("The command 'foobar' was not found.");
					else Sys.println('The command "foobar" is located at: $path');
				});
			}
		}

=== "JavaScript"
		:::js
		import {which} from "@cedx/which.hx";

		async function main() {
			const path = await which("foobar", {onError: command => ""});
			if (!path.length) console.log("The command 'foobar' was not found.");
			else console.log(`The command 'foobar' is located at: ${path}`);
		}

=== "PHP"
		:::php
		<?php
		use function which\which;

		function main(): void {
			$path = which("foobar", ["onError" => fn($command) => ""]);
			if (!strlen($path)) print "The command 'foobar' was not found.";
			else print "The command 'foobar' is located at: $path";
		}

When an `onError` handler is provided, it is called with the command as argument, and its return value is used instead.
This is sometimes preferable than immediately handling the `FinderException`.

### **path**: Array&lt;String&gt;
An array of strings specifying the system path from which the given command will be searched.
Defaults to the list of directories provided by the `PATH` environment variable.

=== "Haxe"
		:::haxe
		"foobar".which({path: ["/usr/local/bin", "/usr/bin"]});

=== "JavaScript"
		:::js
		which("foobar", {path: ["/usr/local/bin", "/usr/bin"]});

=== "PHP"
		:::php
		<?php
		which("foobar", ["path" => ["/usr/local/bin", "/usr/bin"]]);
