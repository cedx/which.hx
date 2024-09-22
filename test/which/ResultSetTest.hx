package which;

using StringTools;

/** Tests the features of the `ResultSet` class. **/
@:asserts final class ResultSetTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `all()` method. **/
	@:variant("executable", which.Finder.isWindows ? Some("\\share\\res\\executable.cmd") : None)
	@:variant("executable.sh", which.Finder.isWindows ? None : Some("/share/res/executable.sh"))
	@:variant("not_executable.sh", None)
	@:variant("foo", None)
	public function all(input: String, output: Option<String>) {
		final paths = Which.which(input, {paths: ["share/res"]}).all();
		final promise = output == None
			? asserts.rejects(NotFound, paths)
			: paths.next(values -> { asserts.assert(values.length == 1); asserts.assert(values.pop().endsWith(output.sure())); }).noise();

		promise.handle(asserts.handle);
		return asserts;
	}

	/** Tests the `first()` method. **/
	@:variant("executable", which.Finder.isWindows ? Some("\\share\\res\\executable.cmd") : None)
	@:variant("executable.sh", which.Finder.isWindows ? None : Some("/share/res/executable.sh"))
	@:variant("not_executable.sh", None)
	@:variant("foo", None)
	public function first(input: String, output: Option<String>) {
		final path = Which.which(input, {paths: ["share/res"]}).first();
		final promise = output == None
			? asserts.rejects(NotFound, path)
			: path.next(value -> asserts.assert(value.endsWith(output.sure()))).noise();

		promise.handle(asserts.handle);
		return asserts;
	}
}
