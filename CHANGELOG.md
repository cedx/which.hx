# Changelog

## Version [3.5.0](https://github.com/cedx/which.hx/compare/v3.4.0...v3.5.0)
- Optimized the `Process.gid` and `Process.uid` properties on the `java` compilation target.

## Version [3.4.0](https://github.com/cedx/which.hx/compare/v3.3.0...v3.4.0)
- Optimized the `Process.gid` and `Process.uid` properties on the `js` and `php` compilation targets.

## Version [3.3.0](https://github.com/cedx/which.hx/compare/v3.2.0...v3.3.0)
- Updated the package dependencies.

## Version [3.2.0](https://github.com/cedx/which.hx/compare/v3.1.2...v3.2.0)
- Updated the package dependencies.
- Use the null coalescing operator.

## Version [3.1.2](https://github.com/cedx/which.hx/compare/v3.1.1...v3.1.2)
- Fixed the separator used to split the `PATH_EXT` environment variable.

## Version [3.1.1](https://github.com/cedx/which.hx/compare/v3.1.0...v3.1.1)
- Restored the [HashLink](https://hashlink.haxe.org) tests.
- Updated the project URL.

## Version [3.1.0](https://github.com/cedx/which.hx/compare/v3.0.1...v3.1.0)
- Promoted the `Finder.which()` static method to a module-level function.

## Version [3.0.1](https://github.com/cedx/which.hx/compare/v3.0.1...v3.0.0)
- Updated the documentation.
- Updated the project URL.

## Version [3.0.0](https://github.com/cedx/which.hx/compare/v2.0.2...v3.0.0)
- Breaking change: renamed the `Finder.path` property to `paths`.
- Breaking change: renamed the `FinderStream` class to `ResultSet`.
- Breaking change: removed the `FinderException` and `FinderTools` classes.
- Breaking change: removed the `ProcessIdentity` enumeration.
- Dropped the [Composer](https://getcomposer.org) and [npm](https://www.npmjs.com) packages.
- Fixed the [JVM](https://www.java.com) target on Unix platforms.
- Replaced the build system based on [PowerShell](https://docs.microsoft.com/en-us/powershell) by [lix](https://github.com/lix-pm/lix.client) scripts.
- Restored the [Neko](https://nekovm.org) binary.
- Updated the package dependencies.

## Version [2.0.2](https://github.com/cedx/which.hx/compare/v2.0.1...v2.0.2)
- Added support for [JVM](https://www.java.com) testing.
- Fixed the [PHP](https://www.php.net) typings.
- Updated the package dependencies.

## Version [2.0.1](https://github.com/cedx/which.hx/compare/v2.0.0...v2.0.1)
- The `FinderStream` class is now public.

## Version [2.0.0](https://github.com/cedx/which.hx/compare/v1.0.2...v2.0.0)
- Breaking change: ported the iteration to [Tinkerbell streams](https://github.com/haxetink/tink_streams).
- Breaking change: raised the [PHP](https://www.php.net) constraint.
- Breaking change: removed the `--silent` option from the command line interface.
- Breaking change: removed the `WhichOptions` type definition.
- Breaking change: the `which()` function returns an object instead of a string or an array of strings. 
- Breaking change: the `Finder.find()` method returns a `tink.streams.Stream` instead of a `tink.core.Promise`.
- Breaking change: the `Process.getProcessId()` method raises an error instead of returning `-1` when a problem occurs.
- Added the `FinderStream` private class.
- Added support for [HashLink](https://hashlink.haxe.org) testing.
- Ported the documentation to [docsify](https://docsify.js.org).
- Ported the tests to [Tinberkell](https://haxetink.github.io/tink_unittest).

## Version [1.0.2](https://github.com/cedx/which.hx/compare/v1.0.1...v1.0.2)
- `haxelib run`: replaced the [Neko](https://nekovm.org) binary by the `Run` module.

## Version [1.0.1](https://github.com/cedx/which.hx/compare/v1.0.0...v1.0.1)
- Pinned the [`tink_core`](https://lib.haxe.org/p/tink_core) dependency.

## Version 1.0.0
- Initial release.
