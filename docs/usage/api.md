# Application programming interface
This package provides the `Finder.which()` method, allowing to locate a command in the system path.

This method takes the name of the command to locate, and returns a `ResultSet` with the three following methods :
- `all()` : get all instances of the searched command.
- `first()` : get the first instance of the searched command.
- `stream()` : get a stream of instances of the searched command.

### **which(command).all()**
The `all()` method returns a `Promise` that resolves with the absolute paths of all instances of an executable found in the system path.
If the executable could not be located, the promise rejects with a `NotFound` error.

```haxe
import which.Finder.which;
using tink.CoreApi;

function main() which("foobar").all().handle(outcome -> switch outcome {
	case Success(paths):
		Sys.println('The "foobar" command is available at these locations:');
		for (path in paths) Sys.println('- $path');
	case Failure(error):
		Sys.println(error.message);
});
```

### **which(command).first()**
The `first()` method returns a `Promise` that resolves with the absolute path of the first instance of an executable found in the system path.
If the executable could not be located, the promise rejects with a `NotFound` error.

```haxe
import which.Finder.which;
using tink.CoreApi;

function main() which("foobar").first().handle(outcome -> switch outcome {
	case Success(path): Sys.println('The "foobar" command is located at: $path');
	case Failure(error): Sys.println(error.message);
});
```

### **which(command).stream()**
The `stream()` method returns a `RealStream` that yields the absolute paths of the instances of an executable found in the system path.

```haxe
import tink.streams.Stream.Handled;
import which.Finder.which;
using tink.CoreApi;

function main() which("foobar").stream().forEach(path -> {
	Sys.println('The "foobar" command is located at: $path');
	Handled.Resume;
});
```

## Options
The behavior of the `Finder.which()` method can be customized using the following options.

### **extensions**: Array&lt;String&gt;
An array of strings specifying the list of executable file extensions.
On Windows, defaults to the list of extensions provided by the `PATHEXT` environment variable.

```haxe
which("foobar", {extensions: [".foo", ".exe", ".cmd"]});
```

?> The `extensions` option is only meaningful on the Windows platform, where the executability of a file is determined from its extension.

### **path**: Array&lt;String&gt;
An array of strings specifying the system path from which the given command will be searched.
Defaults to the list of directories provided by the `PATH` environment variable.

```haxe
which("foobar", {path: ["/usr/local/bin", "/usr/bin"]});
```
