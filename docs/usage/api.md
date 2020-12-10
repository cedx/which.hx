# Application programming interface
This package provides a single function, `which()`, allowing to locate a command in the system path.

If the command could be located, this function returns an object with the following two methods :
- `all()` : get all instances of the searched command.
- `first()` : get the first instance of the searched command.

If the command could not be located, the `which()` function raises an error.

?> **Haxe:** the function is provided by the `FinderTools` class,
that can act as a [static extension](https://haxe.org/manual/lf-static-extension.html) to the `String` class
(with the `using which.FinderTools` statement).

### **which(command).all()**
This method allows to get the absolute paths of all instances of an executable available on the system path.

<!-- tabs:start -->

#### **Haxe**
The `all()` method returns a `Promise` that resolves with all paths of the executables found.
If the executable could not be located, the promise rejects with a `NotFound` error.

```haxe
import which.FinderTools;
using tink.CoreApi;

class Main {
	static function main() {
		FinderTools.which("foobar").all().handle(outcome -> switch outcome {
			case Success(paths):
				Sys.println('The "foobar" command is available at these locations:');
				for (path in paths) Sys.println('- $path');
			case Failure(error):
				Sys.println(error.message);
		});
	}
}
```

!> The `Promise` implementation is provided by the [Tinkerbell Core](https://haxetink.github.io/tink_core) library.

#### **JavaScript**
The `all()` method returns a `Promise` that resolves with all paths of the executables found.
If the executable could not be located, the promise rejects with a `FinderException`.

```javascript
import {which} from "@cedx/which.hx";

async function main() {
	try {
		const paths = await which("foobar").all();
		console.log(`The "foobar" command is available at these locations: ${path}`);
		for (path of paths) console.log(`- ${path}`);
	}

	catch (error) {
		console.log(error.message);
	}
}
```

#### **PHP**
The `all()` method returns an array of `string` providing all paths of the executables found.
If the executable could not be located, a `FinderException` is thrown.

```php
use function which\which;
use which\FinderException;

function main(): void {
	try {
		$paths = which("foobar")->all();
		print "The 'foobar' command is available at these locations:" . PHP_EOL;
		for ($paths as $path) print "- $path" . PHP_EOL;
	}

	catch (FinderException $e) {
		print $e->getMessage();
	}
}
```

<!-- tabs:end -->

### **which(command).first()**
This method allows to get the absolute path of the first instance of an executable available on the system path.

<!-- tabs:start -->

#### **Haxe**
The `first()` method returns a `Promise` that resolves with the first path of the executables found.
If the executable could not be located, the promise rejects with a `NotFound` error.

```haxe
import which.FinderTools;
using tink.CoreApi;

class Main {
	static function main() {
		FinderTools.which("foobar").first().handle(outcome -> switch outcome {
			case Success(path): Sys.println('The "foobar" command is located at: $path');
			case Failure(error): Sys.println(error.message);
		});
	}
}
```

!> The `Promise` implementation is provided by the [Tinkerbell Core](https://haxetink.github.io/tink_core) library.

#### **JavaScript**
The `first()` method returns a `Promise` that resolves with the first path of the executables found.
If the executable could not be located, the promise rejects with a `FinderException`.

```javascript
import {which} from "@cedx/which.hx";

async function main() {
	try {
		const path = await which("foobar").first();
		console.log(`The "foobar" command is located at: ${path}`);
	}

	catch (error) {
		console.log(error.message);
	}
}
```

#### **PHP**
The `first()` method returns a `string` providing the first path of the executables found.
If the executable could not be located, a `FinderException` is thrown.

```php
use function which\which;
use which\FinderException;

function main(): void {
	try {
		$path = which("foobar")->first();
		print "The 'foobar' command is located at: $path";
	}

	catch (FinderException $e) {
		print $e->getMessage();
	}
}
```

<!-- tabs:end -->

## Options
The behavior of the `which()` function can be customized using the following options.

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
