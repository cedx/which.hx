package which;

import which.Finder.which;
using StringTools;

/** Tests the features of the `ResultSet` class. **/
@:asserts class ResultSetTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `all()` method. **/
	/*
	@:variant("executable", which.Finder.isWindows ? "\\test\\fixtures\\executable.cmd" : null)
	@:variant("executable.sh", which.Finder.isWindows ? null : "/test/fixtures/executable.sh")
	@:variant("foo", null)
	public function testAll(command: String, output: Null<String>) {
		which(command, {path: ["test/fixtures"]}).all().handle(outcome -> switch outcome {
			case Success(paths): output != null
				? { asserts.assert(paths.length == 1); asserts.assert(paths[0].endsWith(output)); asserts.done(); }
				: asserts.fail("Promise not rejected.");
			case Failure(error): output != null
				? asserts.fail(error.message)
				: { asserts.assert(error.code == NotFound); asserts.done(); }
		});

		return asserts;
	}*/

	/** Tests the `first()` method. **/
	/*
	@:variant("executable", which.Finder.isWindows ? "\\test\\fixtures\\executable.cmd" : null)
	@:variant("executable.sh", which.Finder.isWindows ? null : "/test/fixtures/executable.sh")
	@:variant("foo", null)
	public function testFirst(command: String, output: Null<String>) {
		which(command, {path: ["test/fixtures"]}).first().handle(outcome -> switch outcome {
			case Success(path): output != null
				? { asserts.assert(path.endsWith(output)); asserts.done(); }
				: asserts.fail("Promise not rejected.");
			case Failure(error): output != null
				? asserts.fail(error.message)
				: { asserts.assert(error.code == NotFound); asserts.done(); }
		});

		return asserts;
	}*/

	/** Tests the `stream()` method. **/
	@:variant("executable", which.Finder.isWindows ? "\\test\\fixtures\\executable.cmd" : null)
	@:variant("executable.sh", which.Finder.isWindows ? null : "/test/fixtures/executable.sh")
	@:variant("foo", null)
	public function testStream(input: String, output: Null<String>) {
		which(input, {path: ["test/fixtures"]}).stream().collect()
			.next(paths -> asserts.assert(output != null ? paths.length == 1 && paths[0].endsWith(output) : paths.length == 0))
			.handle(asserts.handle);

		return asserts;
	}
}
