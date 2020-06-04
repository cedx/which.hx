package which;

/** Tests the features of the `Finder` class. **/
class FinderTest extends Test {

	/** The platform-specific path delimiter. **/
	static final delimiter = isWindows ? ";" : ":";

	/** Value indicating whether the current platform is Windows. **/
	static final isWindows = Sys.systemName() == "Windows";

	/** Tests the `isExecutable()` method. **/
	function testIsExecutable(async: Async): Void {
		// It should return `false` for a non-existent file.
		async.branch(branch -> new Finder().isExecutable("foo/doesNotExist.bar").then(result -> {
			Assert.isFalse(result);
			branch.done();
		}));

		// It should return `false` for a non-executable file.
		async.branch(branch -> new Finder().isExecutable("test/TestAll.hx").then(result -> {
			Assert.isFalse(result);
			branch.done();
		}));

		// It should return `false` for a POSIX executable when test is run on Windows, otherwise `true`.
		async.branch(branch -> new Finder().isExecutable("test/fixtures/executable.sh").then(result -> {
			Assert.equals(result, !isWindows);
			branch.done();
		}));

		// It should return `false` for a Windows executable when test is run on POSIX, otherwise `true`.
		async.branch(branch -> new Finder().isExecutable("test/fixtures/executable.cmd").then(result -> {
			Assert.equals(result, isWindows);
			branch.done();
		}));
	}
}
