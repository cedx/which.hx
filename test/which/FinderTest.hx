package which;

using StringTools;

/** Tests the features of the `Finder` class. **/
@:asserts class FinderTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `find()` method. **/
	@:variant("executable", which.Finder.isWindows ? 1 : 0, "\\test\\fixtures\\executable.cmd")
	@:variant("executable.sh", which.Finder.isWindows ? 0 : 1, "/test/fixtures/executable.sh")
	public function testFind(input: String, length: Int, path: String) {
		new Finder({path: ["test/fixtures"]}).find(input)
			.then(paths -> {
				asserts.assert(paths.length == length);
				if (length > 0) asserts.assert(paths[0].endsWith(path));
			})
			.catchError(e -> asserts.fail(Std.string(e)))
			.finally(() -> asserts.done());

		return asserts;
	}

	/** Tests the `isExecutable()` method. **/
	@:variant("foo/bar/baz.qux", false)
	@:variant("test/fixtures/not_executable.sh", false)
	@:variant("test/fixtures/executable.sh", !which.Finder.isWindows)
	@:variant("test/fixtures/executable.cmd", which.Finder.isWindows)
	public function testIsExecutable(input: String, output: Bool) {
		new Finder().isExecutable(input)
			.then(isExec -> asserts.assert(isExec == output))
			.catchError(e -> asserts.fail(Std.string(e)))
			.finally(() -> asserts.done());

		return asserts;
	}
}
