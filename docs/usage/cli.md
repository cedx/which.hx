# Command line interface
Start by installing the `which` executable globally with your package manager.
From a command prompt, run:

```shell
# haxelib
haxelib --global install which

# lix
lix +lib --global which
```

Now in your terminal, you can use:

```shell
# haxelib
haxelib run which --version

# lix
lix run which --version
```

Then invoke it to find the instances of an executable command:

```shell
$ which --help

Find the instances of an executable in the system path.

    <command> : The name of the command to find.

  Flags:
          --all, -a : List all instances of executables found (instead of just the first one).
         --help, -h : Output usage information.
      --version, -v : Output the version number.
```

For example:

```shell
haxelib run which haxe
# /usr/bin/haxe

haxelib run which --all haxe
# /usr/bin/haxe
# /usr/local/bin/haxe
```
