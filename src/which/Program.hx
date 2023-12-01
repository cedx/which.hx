package which;

import tink.Cli;
import tink.cli.Rest;
using Lambda;

/**
	Find the instances of an executable in the system path.

	> which [flags] <command>
**/
@:noDoc final class Program {

	/** List all instances of executables found (instead of just the first one). **/
	public var all = false;

	/** Display this help. **/
	public var help = false;

	/** Output the version number. **/
	public var version = false;

	/** Creates a new program. **/
	public function new() {}

	/** Application entry point. **/
	static function main() Cli.process(Sys.args(), new Program()).handle(Cli.exit);

	/** command : The name of the command to find. **/
	@:defaultCommand
	public function run(rest: Rest<String>) {
		if (help || version) {
			Sys.println(version ? Platform.packageVersion : Cli.getDoc(this));
			return Promise.NOISE;
		}

		final requiredArgs = Sys.getEnv("HAXELIB_RUN") == "1" ? 2 : 1;
		if (rest.length < requiredArgs) return new Error(BadRequest, "You must provide the name of a command to find.");

		final resultSet = Which.which(rest.shift());
		final promise = all ? resultSet.all() : resultSet.first().next(executable -> [executable]);
		return promise.next(executables -> {
			executables.iter(Sys.println);
			Noise;
		});
	}
}
