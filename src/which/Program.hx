package which;

import tink.Cli;
import tink.cli.Rest;
import which.FinderException;

using thenshim.PromiseTools;
using which.Tools;

/** Find the instances of an executable in the system path. **/
class Program {

	/** List all instances of executables found (instead of just the first one). **/
	public var all = false;

	/** Output usage information. **/
	public var help = false;

	/** Silence the output, just return the exit code (0 if any executable is found, otherwise 1). **/
	public var silent = false;

	/** Output the version number. **/
	public var version = false;

	/** Creates a new program. **/
	public function new() {}

	/** Application entry point. **/
	static function main()
		Cli.process(Sys.args(), new Program()).handle(Cli.exit);

	/** <command> : The name of the command to find. **/
	@:defaultCommand
	public function run(rest: Rest<String>): Void {
		if (help) return Sys.println(Cli.getDoc(this));
		if (version) return Sys.println(Version.getPackageVersion());

		if (rest.length == 0) {
			Sys.println("ERROR: you must provide the name of a command to find.");
			return Sys.exit(64);
		}

		rest[0].which({all: all})
			.then(executables -> if (!silent) {
				if (Std.isOfType(executables, String)) executables = cast [executables];
				Lambda.iter(executables, Sys.println);
			})
			.catchError(e -> Sys.exit(Std.isOfType(e, FinderException) ? 1 : 2));
	}
}
