package which;

import haxe.Exception;

/** An exception caused by a `Finder` in a command lookup. **/
@:expose
class FinderException extends Exception {

	/** The looked up command. **/
	public final command: String;

	/** The finder used to lookup the command. **/
	public final finder: Finder;

	/** Creates a new finder exception. **/
	public function new(command: String, finder: Finder, message: String = "", ?previous: Exception) {
		super(message, previous);
		this.command = command;
		this.finder = finder;
	}
}
