# Application programming interface
This package provides a single function, `which()`, allowing to locate a command in the system path.

<!-- tabs:start -->

#### **Haxe**
The function is provided by the `FinderTools` class,
that can act as a [static extension](https://haxe.org/manual/lf-static-extension.html) to the `String` class
(with the `using which.FinderTools` statement).

It returns a `Promise` that resolves with the absolute path of the first instance of the executables found.
If the command could not be located, the promise rejects with a `FinderException`.

```haxe
import which.FinderException;
import which.FinderTools;

class Main {
	static function main() {
		FinderTools.which("foobar").handle(
			path -> Sys.println('The command "foobar" is located at: $path'),
			e -> Sys.println('The command "${(e: FinderException).command}" was not found.')
		);
	}
}
```

?> The `Promise` implementation is provided by the [Tinkerbell Core](https://haxetink.github.io/tink_core) library.

#### **JavaScript**
The function returns a `Promise` that resolves with the absolute path of the first instance of the executables found.
If the command could not be located, the promise rejects with a `FinderException`.

```javascript
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
```

#### **PHP**
The function returns a `string` specifying the absolute path of the first instance of the executables found.
If the command could not be located, a `FinderException` is thrown.

```php
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
```

<!-- tabs:end -->

## Options
The behavior of the `which()` function can be customized using the following options.

### **all**: Bool
A value indicating whether to return all executables found, instead of just the first one.

If you pass `true` as option value, the function will return an array of strings providing all paths found, instead of a single string:

<!-- tabs:start -->

#### **Haxe**
```haxe
using which.FinderTools;

class Main {
	static function main() {
		"foobar".which({all: true}).handle((paths: Array<String>) -> {
			Sys.println("The command 'foobar' was found at these locations:");
			for (path in paths) Sys.println(path);
		});
	}
}
```

#### **JavaScript**
```javascript
import {which} from "@cedx/which.hx";

async function main() {
	const paths = await which("foobar", {all: true});
	console.log("The command 'foobar' was found at these locations:");
	for (const path of paths) console.log(path);
}
```

#### **PHP**
```php
use function which\which;

function main(): void {
	$paths = which("foobar", ["all" => true]);
	print "The command 'foobar' was found at these locations:" . PHP_EOL;
	foreach ($paths as $path) print $path . PHP_EOL;
}
```

<!-- tabs:end -->

### **extensions**: Array&lt;String&gt;
An array of strings specifying the list of executable file extensions.
On Windows, defaults to the list of extensions provided by the `PATHEXT` environment variable.

<!-- tabs:start -->

#### **Haxe**
```haxe
"foobar".which({extensions: [".foo", ".exe", ".cmd"]});
```

#### **JavaScript**
```javascript
which("foobar", {extensions: [".foo", ".exe", ".cmd"]});
```

#### **PHP**
```php
which("foobar", ["extensions" => [".foo", ".exe", ".cmd"]]);
```

<!-- tabs:end -->

?> The `extensions` option is only meaningful on the Windows platform, where the executability of a file is determined from its extension.

### **onError**: (command: String) -> Dynamic
By default, when the specified command cannot be located, a `FinderException` is raised. You can disable this exception by providing your own error handler:

<!-- tabs:start -->

#### **Haxe**
```haxe
using which.FinderTools;

class Main {
	static function main() {
		"foobar".which({onError: command -> ""}).handle((path: String) -> {
			if (path.length == 0) Sys.println("The command 'foobar' was not found.");
			else Sys.println('The command "foobar" is located at: $path');
		});
	}
}
```

#### **JavaScript**
```javascript
import {which} from "@cedx/which.hx";

async function main() {
	const path = await which("foobar", {onError: command => ""});
	if (!path.length) console.log("The command 'foobar' was not found.");
	else console.log(`The command 'foobar' is located at: ${path}`);
}
```

#### **PHP**
```php
use function which\which;

function main(): void {
	$path = which("foobar", ["onError" => fn($command) => ""]);
	if (!strlen($path)) print "The command 'foobar' was not found.";
	else print "The command 'foobar' is located at: $path";
}
```

<!-- tabs:end -->

When an `onError` handler is provided, it is called with the command as argument, and its return value is used instead.
This is sometimes preferable than immediately handling the `FinderException`.

### **path**: Array&lt;String&gt;
An array of strings specifying the system path from which the given command will be searched.
Defaults to the list of directories provided by the `PATH` environment variable.

<!-- tabs:start -->

#### **Haxe**
```haxe
"foobar".which({path: ["/usr/local/bin", "/usr/bin"]});
```

#### **JavaScript**
```javascript
which("foobar", {path: ["/usr/local/bin", "/usr/bin"]});
```

#### **PHP**
```php
which("foobar", ["path" => ["/usr/local/bin", "/usr/bin"]]);
```

<!-- tabs:end -->
