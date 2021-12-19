package which;

import tink.Cli;
import tink.cli.Rest;
import which.Finder.which;

using Lambda;

/** Find the instances of an executable in the system path. **/
@:noDoc class Program {

	/** List all instances of executables found (instead of just the first one). **/
	public var all = false;

	/** Output usage information. **/
	public var help = false;

	/** Output the version number. **/
	public var version = false;

	/** Creates a new program. **/
	public function new() {}

	/** Application entry point. **/
	static function main() Cli.process(Sys.args(), new Program()).handle(Cli.exit);

	/** <command> : The name of the command to find. **/
	@:defaultCommand
	public function run(rest: Rest<String>): Promise<Noise> {
		if (help || version) {
			Sys.println(help ? Cli.getDoc(this) : Version.packageVersion);
			return Noise;
		}

		final requiredArgs = 1;
		if (rest.length < requiredArgs || (Sys.getEnv("HAXELIB_RUN") == "1" && rest.length < requiredArgs + 1))
			return new Error(BadRequest, "You must provide the name of a command to find.");

		final promise = all ? which(rest[0]).all() : which(rest[0]).first().next(executable -> [executable]);
		return promise.next(executables -> {
			executables.iter(Sys.println);
			Noise;
		});
	}
}
