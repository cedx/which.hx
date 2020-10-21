package which;

using StringTools;
using thenshim.PromiseTools;
using which.FinderTools;

/** Tests the features of the `Tools` class. **/
class FinderToolsTest extends Test {

	/** Tests the `which()` method. **/
	function testWhich(async: Async) {
		// It should return the path of the `executable.cmd` file on Windows.
		async.branch(branch -> "executable".which({all: false, path: ["test/fixtures"]})
			.then((path: String) -> Finder.isWindows ? Assert.isTrue(path.endsWith("\\test\\fixtures\\executable.cmd")) : Assert.fail("Promise not rejected"))
			.catchError(e -> Finder.isWindows ? Assert.fail(Std.string(e)) : Assert.isOfType(e, FinderException))
			.finally(() -> branch.done())
		);

		// It should return all paths of the `executable.cmd` file on Windows.
		async.branch(branch -> "executable".which({all: true, path: ["test/fixtures"]})
			.then((paths: Array<String>) -> if (!Finder.isWindows) Assert.fail("Promise not rejected") else {
				Assert.equals(1, paths.length);
				Assert.isTrue(paths[0].endsWith("\\test\\fixtures\\executable.cmd"));
			})
			.catchError(e -> Finder.isWindows ? Assert.fail(Std.string(e)) : Assert.isOfType(e, FinderException))
			.finally(() -> branch.done())
		);

		// It should return the path of the `executable.sh` file on POSIX.
		async.branch(branch -> "executable.sh".which({all: false, path: ["test/fixtures"]})
			.then((path: String) -> Finder.isWindows ? Assert.fail("Promise not rejected") : Assert.isTrue(path.endsWith("/test/fixtures/executable.sh")))
			.catchError(e -> Finder.isWindows ? Assert.isOfType(e, FinderException) : Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		// It should return all paths of the `executable.sh` file on POSIX.
		async.branch(branch -> "executable.sh".which({all: true, path: ["test/fixtures"]})
			.then((paths: Array<String>) -> if (Finder.isWindows) Assert.fail("Promise not rejected") else {
				Assert.equals(1, paths.length);
				Assert.isTrue(paths[0].endsWith("/test/fixtures/executable.sh"));
			})
			.catchError(e -> Finder.isWindows ? Assert.isOfType(e, FinderException) : Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		// It should return the value of the `onError` handler.
		async.branch(branch -> "foo".which({all: false, onError: _ -> "bar/baz.qux"})
			.then((path: String) -> Assert.equals("bar/baz.qux", path), e -> Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		async.branch(branch -> "foo".which({all: true, onError: _ -> ["bar", "baz", "qux"]})
			.then((paths: Array<String>) -> Assert.same(["bar", "baz", "qux"], paths), e -> Assert.fail(Std.string(e)))
			.finally(() -> branch.done())
		);
	}
}
