package which;

using StringTools;

/** Tests the features of the `Finder` class. **/
@:asserts class FinderTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `find()` method. **/
	@:variant("executable", which.Finder.isWindows ? "\\test\\fixtures\\executable.cmd" : null)
	@:variant("executable.sh", which.Finder.isWindows ? null : "/test/fixtures/executable.sh")
	public function testFind(input: String, output: Null<String>) {
		new Finder({path: ["test/fixtures"]})
			.find(input)
			.collect()
			.next(paths -> asserts.assert(output != null ? paths.length == 1 && paths[0].endsWith(output) : paths.length == 0))
			.handle(asserts.handle);

		return asserts;
	}

	/** Tests the `isExecutable()` method. **/
	@:variant("test/fixtures/executable.cmd", which.Finder.isWindows)
	@:variant("test/fixtures/executable.sh", !which.Finder.isWindows)
	@:variant("test/fixtures/not_executable.sh", false)
	@:variant("foo/bar/baz.qux", null)
	public function testIsExecutable(input: String, output: Null<Bool>) {
		new Finder().isExecutable(input).handle(outcome -> switch outcome {
			case Success(isExec):
				asserts.assert(output != null && isExec == output);
				asserts.done();
			case Failure(error):
				asserts.assert(output == null && error.code == NotFound);
				asserts.done();
		});

		return asserts;
	}
}
