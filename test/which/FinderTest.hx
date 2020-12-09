package which;

import tink.streams.Stream;
using StringTools;

/** Tests the features of the `Finder` class. **/
@:asserts class FinderTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `find()` method. **/
	@:variant("executable", which.Finder.isWindows ? "\\test\\fixtures\\executable.cmd" : null)
	@:variant("executable.sh", which.Finder.isWindows ? null : "/test/fixtures/executable.sh")
	public function testFind(input: String, output: Null<String>) {
		var executable: Null<String> = null;
		new Finder({path: ["test/fixtures"]}).find(input).forEach(path -> {
			executable = path;
			Resume;
		}).handle(conclusion -> {
			asserts.assert(output != null ? executable.endsWith(output) : executable == null);
			asserts.assert(conclusion == Depleted);
			asserts.done();
		});

		return asserts;
	}

	/** Tests the `isExecutable()` method. **/
	@:variant("foo/bar/baz.qux", false)
	@:variant("test/fixtures/not_executable.sh", false)
	@:variant("test/fixtures/executable.sh", !which.Finder.isWindows)
	@:variant("test/fixtures/executable.cmd", which.Finder.isWindows)
	public function testIsExecutable(input: String, output: Bool) {
		new Finder().isExecutable(input).next(isExec -> asserts.assert(isExec == output)).handle(asserts.handle);
		return asserts;
	}
}
