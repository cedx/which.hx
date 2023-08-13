# Command line interface
From a command prompt, verify that the `which` program is properly installed by running the following command:

<!-- tabs:start -->

#### **haxelib**

```shell
haxelib run which --help
```

#### **lix**

```shell
lix run which --help
```

<!-- tabs:end -->

If everything is OK, this help will be displayed:

```shell
Find the instances of an executable in the system path.

> which [flags] <command>

    command : The name of the command to find.

  Flags:
          --all, -a : List all instances of executables found (instead of just the first one).
         --help, -h : Display this help.
      --version, -v : Output the version number.
```

Then, invoke it to find the instances of an executable command:

<!-- tabs:start -->

#### **haxelib**

```shell
haxelib run which --all haxe
# /usr/bin/haxe
# /usr/local/bin/haxe
```

#### **lix**

```shell
lix run which --all haxe
# /usr/bin/haxe
# /usr/local/bin/haxe
```

<!-- tabs:end -->
