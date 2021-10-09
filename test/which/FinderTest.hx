package which;

import tink.streams.Stream.Handled;
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
		new Finder({path: ["test/fixtures"]})
			.find(input)
			.forEach(path -> { executable = path; Handled.Resume; })
			.handle(conclusion -> {
				asserts.assert(output != null ? executable != null && executable.endsWith(output) : executable == null);
				asserts.assert(conclusion == Depleted);
				asserts.done();
			});

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
