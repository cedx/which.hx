# Application programming interface
This package provides the `which(command: String)` function, allowing to locate a command in the system path.

This function takes the name of the command to locate, and returns a `ResultSet` with the three following methods :

- `all()` : get all instances of the searched command.
- `first()` : get the first instance of the searched command.
- `stream()` : get a stream of instances of the searched command.

### **all()**: Promise&lt;Array&lt;String&gt;&gt;
The `ResultSet.all()` method returns a `Promise` that resolves with the absolute paths of all instances of an executable found in the system path.
If the executable could not be located, the promise rejects with a `NotFound` error.

```haxe
import Which;
using tink.CoreApi;

function main() which("foobar").all().handle(outcome -> switch outcome {
  case Success(paths):
    Sys.println('The "foobar" command is available at these locations:');
    for (path in paths) Sys.println('- $path');
  case Failure(error):
    Sys.println(error.message);
});
```

### **first()**: Promise&lt;String&gt;
The `ResultSet.first()` method returns a `Promise` that resolves with the absolute path of the first instance of an executable found in the system path.
If the executable could not be located, the promise rejects with a `NotFound` error.

```haxe
import Which;
using tink.CoreApi;

function main() which("foobar").first().handle(outcome -> switch outcome {
  case Success(path): Sys.println('The "foobar" command is located at: $path');
  case Failure(error): Sys.println(error.message);
});
```

### **stream()**: RealStream&lt;String&gt;
The `ResultSet.stream()` method returns a `RealStream` that yields the absolute path of the instances of an executable found in the system path.

```haxe
import Which;
import tink.streams.Stream.Handled;
using tink.CoreApi;

function main() {
  Sys.println('The "foobar" command is available at these locations:');
  which("foobar").stream().forEach(path -> {
    Sys.println('- $path');
    Handled.Resume;
  });
}
```

## Options
The behavior of the `which(command: String, ?options: FinderOptions)` function can be customized using the following options.

### **extensions**: Array&lt;String&gt;
An array of strings specifying the list of executable file extensions.
On Windows, defaults to the list of extensions provided by the `PATHEXT` environment variable.

```haxe
which("foobar", {extensions: [".foo", ".exe", ".cmd"]});
```

> The `extensions` option is only meaningful on the Windows platform, where the executability of a file is determined from its extension.

### **paths**: Array&lt;String&gt;
An array of strings specifying the system paths from which the given command will be searched.
Defaults to the list of directories provided by the `PATH` environment variable.

```haxe
which("foobar", {paths: ["/usr/local/bin", "/usr/bin"]});
```
