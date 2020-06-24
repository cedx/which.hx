package which;

using StringTools;
using thenshim.PromiseTools;
using which.FinderTools;

/** Tests the features of the `Tools` class. **/
class FinderToolsTest extends Test {

	/** Value indicating whether the current platform is Windows. **/
	static final isWindows = Sys.systemName() == "Windows";

	/** Tests the `which()` method. **/
	function testWhich(async: Async) {
		// It should return the path of the `executable.cmd` file on Windows.
		async.branch(branch -> "executable".which({all: false, path: ["test/fixtures"]})
			.then((executable: String) -> isWindows ? Assert.isTrue(executable.endsWith("\\test\\fixtures\\executable.cmd")) : Assert.fail("Promise not rejected"))
			.catchError(e -> isWindows ? Assert.fail(Std.string(e)) : Assert.isTrue(Std.isOfType(e, FinderException)))
			.finally(() -> branch.done())
		);

		// It should return all paths of the `executable.cmd` file on Windows.
		async.branch(branch -> "executable".which({all: true, path: ["test/fixtures"]})
			.then((executables: Array<String>) -> if (!isWindows) Assert.fail("Promise not rejected") else {
				Assert.equals(1, executables.length);
				Assert.isTrue(executables[0].endsWith("\\test\\fixtures\\executable.cmd"));
			})
			.catchError(e -> isWindows ? Assert.fail(Std.string(e)) : Assert.isTrue(Std.isOfType(e, FinderException)))
			.finally(() -> branch.done())
		);

		// It should return the path of the `executable.sh` file on POSIX.
		async.branch(branch -> "executable.sh".which({all: false, path: ["test/fixtures"]})
			.then((executable: String) -> isWindows ? Assert.fail("Promise not rejected") : Assert.isTrue(executable.endsWith("/test/fixtures/executable.sh")))
			.catchError(e -> isWindows ? Assert.isTrue(Std.isOfType(e, FinderException)) : Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		// It should return all paths of the `executable.sh` file on POSIX.
		async.branch(branch -> "executable.sh".which({all: true, path: ["test/fixtures"]})
			.then((executables: Array<String>) -> if (isWindows) Assert.fail("Promise not rejected") else {
				Assert.equals(1, executables.length);
				Assert.isTrue(executables[0].endsWith("/test/fixtures/executable.sh"));
			})
			.catchError(e -> isWindows ? Assert.isTrue(Std.isOfType(e, FinderException)) : Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		// It should return the value of the `onError` handler.
		async.branch(branch -> "foo".which({all: false, onError: _ -> "bar/baz.qux"})
			.then((executable: String) -> Assert.equals("bar/baz.qux", executable), e -> Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		async.branch(branch -> "foo".which({all: true, onError: _ -> ["bar", "baz", "qux"]})
			.then((executables: Array<String>) -> Assert.same(["bar", "baz", "qux"], executables), e -> Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);
	}
}
