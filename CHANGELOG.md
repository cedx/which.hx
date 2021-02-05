# Changelog

## Version [2.0.2](https://github.com/cedx/which.hx/compare/v2.0.1...v2.0.2)
- Added support for JVM testing.
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
