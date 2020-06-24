package which;

import tink.Cli;
import tink.cli.Rest;
import tink.core.Promise as TinkPromise;
import which.FinderException;

using thenshim.PromiseTools;
using which.FinderTools;

#if nodejs
import js.Node;
#end

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
	static function main() {
		#if nodejs
			Node.process.title = "Which.hx";
		#elseif php
			php.Syntax.code("cli_set_process_title({0})", "Which.hx");
		#end

		Cli.process(Sys.args(), new Program()).handle(Cli.exit);
	}

	/** <command> : The name of the command to find. **/
	@:defaultCommand
	public function run(rest: Rest<String>): TinkPromise<Dynamic> {
		if (help) {
			Sys.println(Cli.getDoc(this));
			Sys.exit(0);
		}

		if (version) {
			Sys.println(Version.getPackageVersion());
			Sys.exit(0);
		}

		if (rest.length == 0) {
			Sys.println("You must provide the name of a command to find.");
			Sys.exit(64);
		}

		return rest[0].which({all: all})
			.then(executables -> if (!silent) {
				if (Std.isOfType(executables, String)) executables = cast [executables];
				Lambda.iter(executables, Sys.println);
			})
			.catchError(e -> Sys.exit(Std.isOfType(e, FinderException) ? 1 : 2));
	}
}
