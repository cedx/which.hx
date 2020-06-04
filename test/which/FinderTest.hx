package which;

using StringTools;

/** Tests the features of the `Finder` class. **/
class FinderTest extends Test {

	/** Value indicating whether the current platform is Windows. **/
	static final isWindows = Sys.systemName() == "Windows";

	/** Tests the `find()` method. **/
	function testFind(async: Async): Void {
		final finder = new Finder({path: ["test/fixtures"]});

		// It should return the path of the `executable.cmd` file on Windows.
		async.branch(branch -> finder.find("executable").then(executables -> {
			Assert.equals(isWindows ? 1 : 0, executables.length);
			if (isWindows) Assert.isTrue(executables[0].endsWith("\\test\\fixtures\\executable.cmd"));
			branch.done();
		}));

		// It should return the path of the `executable.sh` file on POSIX.
		async.branch(branch -> finder.find("executable.sh").then(executables -> {
			Assert.equals(isWindows ? 0 : 1, executables.length);
			if (!isWindows) Assert.isTrue(executables[0].endsWith("/test/fixtures/executable.sh"));
			branch.done();
		}));
	}

	/** Tests the `isExecutable()` method. **/
	function testIsExecutable(async: Async): Void {
		final finder = new Finder();

		// It should return `false` for a non-existent file.
		async.branch(branch -> finder.isExecutable("foo/bar/baz.qux").then(isExec -> {
			Assert.isFalse(isExec);
			branch.done();
		}));

		// It should return `false` for a non-executable file.
		async.branch(branch -> finder.isExecutable("test/fixtures/not_executable.sh").then(isExec -> {
			Assert.isFalse(isExec);
			branch.done();
		}));

		// It should return `false` for a POSIX executable when test is run on Windows, otherwise `true`.
		async.branch(branch -> finder.isExecutable("test/fixtures/executable.sh").then(isExec -> {
			Assert.equals(isExec, !isWindows);
			branch.done();
		}));

		// It should return `false` for a Windows executable when test is run on POSIX, otherwise `true`.
		async.branch(branch -> finder.isExecutable("test/fixtures/executable.cmd").then(isExec -> {
			Assert.equals(isExec, isWindows);
			branch.done();
		}));
	}
}
