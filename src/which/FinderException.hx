package which;

import haxe.Exception;

/** An exception caused by a `Finder` in a command lookup. **/
@:expose class FinderException extends Exception {

	/** The looked up command. **/
	public final command: String;

	/** The finder used to lookup the command. **/
	public final finder: Finder;

	/** Creates a new finder exception. **/
	public function new(command: String, finder: Finder, ?previous: Exception) {
		super('No "$command" in (${finder.path.join(Finder.isWindows ? ";" : ":")}).', previous);
		this.command = command;
		this.finder = finder;
	}
}
