# Command line interface
Start by installing the `which` executable globally with your package manager.

<!-- tabs:start -->

#### **Haxe**
From a command prompt, run:

```shell
# haxelib
haxelib --global install which

# lix
lix install --global haxelib:which
```

Now in your terminal, you can use:

```shell
# haxelib
haxelib run which --version

# lix
lix run which --version
```

#### **JavaScript**
From a command prompt, run:

```shell
# npm
npm install --global @cedx/which.hx

# yarn
yarn global add @cedx/which.hx
```

Now in your terminal, you can use:

```shell
npx which --version
```

#### **PHP**
From a command prompt, run:

```shell
composer global require cedx/which.hx
```

Now in your terminal, you can use:

```shell
composer exec which --version
```

<!-- tabs:end -->

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

<!-- tabs:start -->

#### **Haxe**
```shell
haxelib run which haxe
# /usr/bin/haxe

haxelib run which --all haxe
# /usr/bin/haxe
# /usr/local/bin/haxe
```

#### **JavaScript**
```shell
which node
# /usr/bin/node

which --all node
# /usr/bin/node
# /usr/local/bin/node
```

#### **PHP**
```shell
which php
# /usr/bin/php

which --all php
# /usr/bin/php
# /usr/local/bin/php
```

<!-- tabs:end -->
