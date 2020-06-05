package which;

using StringTools;
using thenshim.PromiseTools;

/** Tests the features of the `Main` class. **/
class MainTest extends Test {

	/** Value indicating whether the current platform is Windows. **/
	static final isWindows = Sys.systemName() == "Windows";

	/** Tests the `which()` method. **/
	function testWhich(async: Async): Void {
		// It should return the path of the `executable.cmd` file on Windows.
		async.branch(branch -> Main.which("executable", {all: false, path: ["test/fixtures"]})
			.then(executable -> isWindows ? Assert.isTrue(executable.endsWith("\\test\\fixtures\\executable.cmd")) : Assert.fail("Exception not thrown"))
			// TODO .catchError(e -> isWindows ? Assert.fail(Std.string(e)) : Assert.isTrue(Std.isOfType(e, FinderException)))
			.finally(() -> branch.done())
		);

		// It should return all paths of the `executable.cmd` file on Windows.
		async.branch(branch -> Main.which("executable", {all: true, path: ["test/fixtures"]})
			.then((executables: Array<String>) -> if (!isWindows) Assert.fail("Exception not thrown") else {
				Assert.equals(1, executables.length);
				Assert.isTrue(executables[0].endsWith("\\test\\fixtures\\executable.cmd"));
			})
			.catchError(e -> isWindows ? Assert.fail(Std.string(e)) : Assert.isTrue(Std.isOfType(e, FinderException)))
			.finally(() -> branch.done())
		);

		// It should return the path of the `executable.sh` file on POSIX.
		async.branch(branch -> Main.which("executable.sh", {all: false, path: ["test/fixtures"]})
			.then(executable -> isWindows ? Assert.fail("Exception not thrown") : Assert.isTrue(executable.endsWith("/test/fixtures/executable.sh")))
			.catchError(e -> isWindows ? Assert.isTrue(Std.isOfType(e, FinderException)) : Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		// It should return all paths of the `executable.sh` file on POSIX.
		async.branch(branch -> Main.which("executable.sh", {all: true, path: ["test/fixtures"]})
			.then((executables: Array<String>) -> if (isWindows) Assert.fail("Exception not thrown") else {
				Assert.equals(1, executables.length);
				Assert.isTrue(executables[0].endsWith("/test/fixtures/executable.sh"));
			})
			.catchError(e -> isWindows ? Assert.isTrue(Std.isOfType(e, FinderException)) : Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		// It should return the value of the `onError` handler.
		async.branch(branch -> Main.which("foo", {all: false, onError: _ -> "bar/baz.qux"}).then((executable: String) -> {
			Assert.equals("bar/baz.qux", executable);
			branch.done();
		}));

		async.branch(branch -> Main.which("foo", {all: true, onError: _ -> ["bar", "baz", "qux"]}).then((executables: Array<String>) -> {
			Assert.same(["bar", "baz", "qux"], executables);
			branch.done();
		}));
	}
}
