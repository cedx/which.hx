package which;

import tink.Cli;
import tink.cli.Rest;

using thenshim.PromiseTools;
using tink.CoreApi;
using which.FinderTools;

#if nodejs
import js.Node;
#elseif php
import php.Syntax;
#end

/** Find the instances of an executable in the system path. **/
@:noDoc class Program {

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
	public static function main() {
		#if nodejs
			Node.process.title = "Which.hx";
		#elseif php
			Syntax.code("cli_set_process_title({0})", "Which.hx");
		#end

		Cli.process(Sys.args(), new Program()).handle(Cli.exit);
	}

	/** <command> : The name of the command to find. **/
	@:defaultCommand
	public function run(rest: Rest<String>): Promise<Dynamic> {
		if (help || version) {
			Sys.println(help ? Cli.getDoc(this) : Version.getPackageVersion());
			Sys.exit(0);
		}

		final requiredArgs = 1;
		if (rest.length < requiredArgs || (Sys.getEnv("HAXELIB_RUN") == "1" && rest.length < requiredArgs + 1)) {
			Sys.println("You must provide the name of a command to find.");
			Sys.exit(64);
		}

		return rest[0].which({all: all})
			.then(executables -> if (!silent) {
				if (Std.isOfType(executables, String)) executables = cast [executables];
				Lambda.iter(executables, Sys.println);
			})
			.catchError(e -> {
				if (Std.isOfType(e, FinderException)) {
					if (!silent) Sys.println('No "${rest[0]}" in (${(e: FinderException).finder.path.join(Finder.isWindows ? ";" : ":")}).');
					Sys.exit(1);
				}
				else {
					Sys.println(e);
					Sys.exit(2);
				}
			});
	}
}
