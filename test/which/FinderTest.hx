package which;

using StringTools;

/** Tests the features of the `Finder` class. **/
@:asserts final class FinderTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the constructor. **/
	public function testNew() {
		// It should set the `paths` property to the value of the `PATH` environment variable by default.
		final paths = Sys.getEnv("PATH")?.split(Finder.isWindows ? ";" : ":") ?? [];
		asserts.compare(paths, new Finder().paths);

		// It should set the `extensions` property to the value of the `PATHEXT` environment variable by default.
		final extensions = Sys.getEnv("PATHEXT")?.split(";")?.map(item -> item.toLowerCase()) ?? [".exe", ".cmd", ".bat", ".com"];
		asserts.compare(extensions, new Finder().extensions);

		// It should put in lower case the list of file extensions.
		asserts.compare([".exe", ".js", ".ps1"], new Finder({extensions: [".EXE", ".JS", ".PS1"]}).extensions);
		return asserts.done();
	}

	/** Tests the `find()` method. **/
	@:variant("executable", which.Finder.isWindows ? Some("\\share\\fixture\\executable.cmd") : None)
	@:variant("executable.sh", which.Finder.isWindows ? None : Some("/share/fixture/executable.sh"))
	@:variant("not_executable.sh", None)
	@:variant("foo", None)
	public function find(input: String, output: Option<String>) {
		new Finder({paths: ["share/fixture"]}).find(input).collect()
			.next(paths -> asserts.assert(output != None ? paths.length == 1 && paths.pop().endsWith(output.sure()) : paths.length == 0))
			.handle(asserts.handle);

		return asserts;
	}

	/** Tests the `isExecutable()` method. **/
	@:variant("share/fixture/executable.cmd", Some(which.Finder.isWindows))
	@:variant("share/fixture/executable.sh", Some(!which.Finder.isWindows))
	@:variant("share/fixture/not_executable.sh", Some(false))
	@:variant("foo/bar/baz.qux", None)
	public function isExecutable(input: String, output: Option<Bool>) {
		new Finder().isExecutable(input).handle(outcome -> {
			switch outcome {
				case Success(isExec): asserts.assert(output.equals(isExec));
				case Failure(error): asserts.assert(output == None);
			}

			asserts.done();
		});

		return asserts;
	}
}
