package which;

using StringTools;
using which.FinderTools;

/** Tests the features of the `Tools` class. **/
class FinderToolsTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `which()` method. **/
	public function testWhich() {
		/* TODO
		// It should return the path of the `executable.cmd` file on Windows.
		async.branch(branch -> "executable".which({all: false, path: ["test/fixtures"]})
			.then((path: String) -> Finder.isWindows ? asserts.assert(path.endsWith("\\test\\fixtures\\executable.cmd")) : asserts.fail("Promise not rejected"))
			.catchError(e -> Finder.isWindows ? asserts.fail(Std.string(e)) : Assert.isOfType(e, FinderException))
			.finally(() -> branch.done())
		);

		// It should return all paths of the `executable.cmd` file on Windows.
		async.branch(branch -> "executable".which({all: true, path: ["test/fixtures"]})
			.then((paths: Array<String>) -> if (!Finder.isWindows) asserts.fail("Promise not rejected") else {
				Assert.equals(1, paths.length);
				asserts.assert(paths[0].endsWith("\\test\\fixtures\\executable.cmd"));
			})
			.catchError(e -> Finder.isWindows ? asserts.fail(Std.string(e)) : Assert.isOfType(e, FinderException))
			.finally(() -> branch.done())
		);

		// It should return the path of the `executable.sh` file on POSIX.
		async.branch(branch -> "executable.sh".which({all: false, path: ["test/fixtures"]})
			.then((path: String) -> Finder.isWindows ? asserts.fail("Promise not rejected") : asserts.assert(path.endsWith("/test/fixtures/executable.sh")))
			.catchError(e -> Finder.isWindows ? Assert.isOfType(e, FinderException) : asserts.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		// It should return all paths of the `executable.sh` file on POSIX.
		async.branch(branch -> "executable.sh".which({all: true, path: ["test/fixtures"]})
			.then((paths: Array<String>) -> if (Finder.isWindows) asserts.fail("Promise not rejected") else {
				Assert.equals(1, paths.length);
				asserts.assert(paths[0].endsWith("/test/fixtures/executable.sh"));
			})
			.catchError(e -> Finder.isWindows ? Assert.isOfType(e, FinderException) : asserts.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		// It should return the value of the `onError` handler.
		async.branch(branch -> "foo".which({all: false, onError: _ -> "bar/baz.qux"})
			.then((path: String) -> Assert.equals("bar/baz.qux", path), e -> asserts.fail(Std.string(e)))
			.finally(() -> branch.done())
		);

		async.branch(branch -> "foo".which({all: true, onError: _ -> ["bar", "baz", "qux"]})
			.then((paths: Array<String>) -> Assert.same(["bar", "baz", "qux"], paths), e -> asserts.fail(Std.string(e)))
			.finally(() -> branch.done())
		);*/

		return assert(true);
	}
}
