package which;

import which.Finder.which;

using AssertionTools;
using StringTools;

/** Tests the features of the `ResultSet` class. **/
@:asserts class ResultSetTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `all()` method. **/
	@:variant("executable", which.Finder.isWindows ? "\\test\\fixtures\\executable.cmd" : null)
	@:variant("executable.sh", which.Finder.isWindows ? null : "/test/fixtures/executable.sh")
	@:variant("foo", null)
	public function testAll(input: String, output: Null<String>) {
		final promise = which(input, {path: ["test/fixtures"]}).all();

		if (output == null) asserts.rejects(promise, NotFound).handle(asserts.handle);
		else promise.next(paths -> {
			asserts.assert(paths.length == 1);
			asserts.assert(paths[0].endsWith(output));
		}).handle(asserts.handle);

		return asserts;
	}

	/** Tests the `first()` method. **/
	@:variant("executable", which.Finder.isWindows ? "\\test\\fixtures\\executable.cmd" : null)
	@:variant("executable.sh", which.Finder.isWindows ? null : "/test/fixtures/executable.sh")
	@:variant("foo", null)
	public function testFirst(input: String, output: Null<String>) {
		final promise = which(input, {path: ["test/fixtures"]}).first();
		if (output == null) asserts.rejects(promise, NotFound).handle(asserts.handle);
		else promise.next(path -> asserts.assert(path.endsWith(output))).handle(asserts.handle);
		return asserts;
	}

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
