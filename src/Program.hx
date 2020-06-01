import tink.Cli;
import tink.cli.Rest;

/** Find the instances of an executable in the system path. **/
@:expose class Program {

	/** List all instances of executables found (instead of just the first one). **/
	public var all: Bool = false;

	/** Output usage information. **/
	public var help: Bool = false;

	/** Silence the output, just return the exit code (0 if any executable is found, otherwise 1). **/
	public var silent: Bool = false;

	/** Output the version number. **/
	public var version: Bool = false;

	/** Creates a new program. **/
	public function new() {}

	/** Application entry point. **/
	static function main(): Void
		Cli.process(Sys.args(), new Program()).handle(Cli.exit);

	/** Executes this program. **/
	@:defaultCommand
	public function run(rest: Rest<String>): Void {
		if (help) return Sys.println(Cli.getDoc(this));
		if (version) return Sys.println(Version.getPackageVersion());

		Sys.println("Program path:");
		Sys.println(Sys.programPath());
	}
}

/** Defines the options of the `Program.which()` method. **/
typedef WhichOptions = {

	/** The application to open the target with. **/
	var ?application: String;

	/** The arguments to pass when using a custom `application` option. **/
	var ?arguments: Array<String>;

	/** Value indicating whether to not bring the app to the foreground (macOS only). **/
	var ?background: Bool;

	/** Value indicating whether to wait for the opened application to exit. **/
	var ?wait: Bool;
}
