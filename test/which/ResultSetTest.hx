package which;

using AssertionTools;
using StringTools;

/** Tests the features of the `ResultSet` class. **/
@:asserts class ResultSetTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `all()` method. **/
	@:variant("executable", which.Finder.isWindows ? "\\test\\fixture\\executable.cmd" : null)
	@:variant("executable.sh", which.Finder.isWindows ? null : "/test/fixture/executable.sh")
	@:variant("foo", null)
	public function testAll(input: String, output: Null<String>) {
		final paths = Which.which(input, {paths: ["test/fixture"]}).all();
		final promise = output == null
			? asserts.rejects(paths, NotFound)
			: paths.next(values -> { asserts.assert(values.length == 1); asserts.assert(values[0].endsWith(output)); }).noise();

		promise.handle(asserts.handle);
		return asserts;
	}

	/** Tests the `first()` method. **/
	@:variant("executable", which.Finder.isWindows ? "\\test\\fixture\\executable.cmd" : null)
	@:variant("executable.sh", which.Finder.isWindows ? null : "/test/fixture/executable.sh")
	@:variant("foo", null)
	public function testFirst(input: String, output: Null<String>) {
		final path = Which.which(input, {paths: ["test/fixture"]}).first();
		final promise = output == null
			? asserts.rejects(path, NotFound)
			: path.next(value -> asserts.assert(value.endsWith(output))).noise();

		promise.handle(asserts.handle);
		return asserts;
	}

	/** Tests the `stream()` method. **/
	@:variant("executable", which.Finder.isWindows ? "\\test\\fixture\\executable.cmd" : null)
	@:variant("executable.sh", which.Finder.isWindows ? null : "/test/fixture/executable.sh")
	@:variant("foo", null)
	public function testStream(input: String, output: Null<String>) {
		Which.which(input, {paths: ["test/fixture"]}).stream().collect()
			.next(paths -> asserts.assert(output != null ? paths.length == 1 && paths[0].endsWith(output) : paths.length == 0))
			.handle(asserts.handle);

		return asserts;
	}
}
