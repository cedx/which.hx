package which;

using StringTools;
using which.FinderTools;

/** Tests the features of the `Tools` class. **/
@:asserts class FinderToolsTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `which()` method. **/
	@:variant("executable", {path: ["test/fixtures"]}, which.Finder.isWindows ? "\\test\\fixtures\\executable.cmd" : null)
	@:variant("executable.sh", {path: ["test/fixtures"]}, which.Finder.isWindows ? null : "/test/fixtures/executable.sh")
	@:variant("foo", {}, null)
	public function testWhich(command: String, options: WhichOptions, output: Null<String>) {
		command.which(options).handle(outcome -> switch outcome {
			case Success(paths): output != null
				? { asserts.assert(paths.length == 1); asserts.assert(paths[0].endsWith(output)); asserts.done(); }
				: asserts.fail("Promise not rejected.");
			case Failure(error): output != null
				? asserts.fail(error.message)
				: { asserts.assert(error.code == NotFound); asserts.done(); }
		});

		return asserts;
	}

	/** Tests the `whichOne()` method. **/
	@:variant("executable", {path: ["test/fixtures"]}, which.Finder.isWindows ? "\\test\\fixtures\\executable.cmd" : null)
	@:variant("executable.sh", {path: ["test/fixtures"]}, which.Finder.isWindows ? null : "/test/fixtures/executable.sh")
	@:variant("foo", {}, null)
	public function testWhichOne(command: String, options: WhichOptions, output: Null<String>) {
		command.whichOne(options).handle(outcome -> switch outcome {
			case Success(path): output != null
				? { asserts.assert(path.endsWith(output)); asserts.done(); }
				: asserts.fail("Promise not rejected.");
			case Failure(error): output != null
				? asserts.fail(error.message)
				: { asserts.assert(error.code == NotFound); asserts.done(); }
		});

		return asserts;
	}
}
