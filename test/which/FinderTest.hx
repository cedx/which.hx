package which;

using StringTools;
using thenshim.PromiseTools;

/** Tests the features of the `Finder` class. **/
class FinderTest extends Test {

	/** Tests the `find()` method. **/
	function testFind(async: Async) {
		final finder = new Finder({path: ["test/fixtures"]});

		// It should return the path of the `executable.cmd` file on Windows.
		async.branch(branch -> finder.find("executable")
			.then(paths -> {
				Assert.equals(Finder.isWindows ? 1 : 0, paths.length);
				if (Finder.isWindows) Assert.isTrue(paths[0].endsWith("\\test\\fixtures\\executable.cmd"));
			})
			.catchError(e -> Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		// It should return the path of the `executable.sh` file on POSIX.
		async.branch(branch -> finder.find("executable.sh")
			.then(paths -> {
				Assert.equals(Finder.isWindows ? 0 : 1, paths.length);
				if (!Finder.isWindows) Assert.isTrue(paths[0].endsWith("/test/fixtures/executable.sh"));
			})
			.catchError(e -> Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);
	}

	/** Tests the `isExecutable()` method. **/
	function testIsExecutable(async: Async) {
		final finder = new Finder();

		// It should return `false` for a non-existent file.
		async.branch(branch -> finder.isExecutable("foo/bar/baz.qux")
			.then(isExec -> Assert.isFalse(isExec))
			.catchError(e -> Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		// It should return `false` for a non-executable file.
		async.branch(branch -> finder.isExecutable("test/fixtures/not_executable.sh")
			.then(isExec -> Assert.isFalse(isExec))
			.catchError(e -> Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		// It should return `false` for a POSIX executable when test is run on Windows, otherwise `true`.
		async.branch(branch -> finder.isExecutable("test/fixtures/executable.sh")
			.then(isExec -> Assert.equals(!Finder.isWindows, isExec))
			.catchError(e -> Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		// It should return `false` for a Windows executable when test is run on POSIX, otherwise `true`.
		async.branch(branch -> finder.isExecutable("test/fixtures/executable.cmd")
			.then(isExec -> Assert.equals(Finder.isWindows, isExec))
			.catchError(e -> Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);
	}
}
