package which;

using AssertionTools;
using StringTools;

/** Tests the features of the `ResultSet` class. **/
@:asserts class ResultSetTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `all()` method. **/
	@:variant("executable", which.Finder.isWindows ? Some("\\test\\fixture\\executable.cmd") : None)
	@:variant("executable.sh", which.Finder.isWindows ? None : Some("/test/fixture/executable.sh"))
	@:variant("foo", None)
	public function testAll(input: String, output: Option<String>) {
		final paths = Which.which(input, {paths: ["test/fixture"]}).all();
		final promise = output == None
			? asserts.rejects(NotFound, paths)
			: paths.next(values -> { asserts.assert(values.length == 1); asserts.assert(values[0].endsWith(output.sure())); }).noise();

		promise.handle(asserts.handle);
		return asserts;
	}

	/** Tests the `first()` method. **/
	@:variant("executable", which.Finder.isWindows ? Some("\\test\\fixture\\executable.cmd") : None)
	@:variant("executable.sh", which.Finder.isWindows ? None : Some("/test/fixture/executable.sh"))
	@:variant("foo", None)
	public function testFirst(input: String, output: Option<String>) {
		final path = Which.which(input, {paths: ["test/fixture"]}).first();
		final promise = output == None
			? asserts.rejects(NotFound, path)
			: path.next(value -> asserts.assert(value.endsWith(output.sure()))).noise();

		promise.handle(asserts.handle);
		return asserts;
	}

	/** Tests the `stream()` method. **/
	@:variant("executable", which.Finder.isWindows ? Some("\\test\\fixture\\executable.cmd") : None)
	@:variant("executable.sh", which.Finder.isWindows ? None : Some("/test/fixture/executable.sh"))
	@:variant("foo", None)
	public function testStream(input: String, output: Option<String>) {
		Which.which(input, {paths: ["test/fixture"]}).stream().collect()
			.next(paths -> asserts.assert(output != None ? paths.length == 1 && paths[0].endsWith(output.sure()) : paths.length == 0))
			.handle(asserts.handle);

		return asserts;
	}
}
