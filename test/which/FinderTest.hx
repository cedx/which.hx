package which;

using StringTools;

/** Tests the features of the `Finder` class. **/
@:asserts class FinderTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `find()` method. **/
	@:variant("executable", which.Finder.isWindows ? Some("\\test\\fixture\\executable.cmd") : None)
	@:variant("executable.sh", which.Finder.isWindows ? None : Some("/test/fixture/executable.sh"))
	@:variant("foo", None)
	public function testFind(input: String, output: Option<String>) {
		new Finder({paths: ["test/fixture"]}).find(input).collect()
			.next(paths -> asserts.assert(output != None ? paths.length == 1 && paths[0].endsWith(output.sure()) : paths.length == 0))
			.handle(asserts.handle);

		return asserts;
	}

	/** Tests the `isExecutable()` method. **/
	@:variant("test/fixture/executable.cmd", Some(which.Finder.isWindows))
	@:variant("test/fixture/executable.sh", Some(!which.Finder.isWindows))
	@:variant("test/fixture/not_executable.sh", Some(false))
	@:variant("foo/bar/baz.qux", None)
	public function testIsExecutable(input: String, output: Option<Bool>) {
		new Finder().isExecutable(input).handle(outcome -> {
			switch outcome {
				case Success(isExec): asserts.assert(output.equals(isExec));
				case Failure(error): asserts.assert(output == None && error.code == NotFound);
			}

			asserts.done();
		});

		return asserts;
	}
}
