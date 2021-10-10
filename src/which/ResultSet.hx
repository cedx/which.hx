package which;

import tink.streams.Stream.Handled;

/** Provides convenient access to the stream of search results. **/
class ResultSet {

	/** The searched command. **/
	final command: String;

	/** The error raised when the command was not found. **/
	final error: Error;

	/** The finder used to perform the search. **/
	final finder: Finder;

	/** Creates a new result set. **/
	public function new(command: String, finder: Finder) {
		this.command = command;
		this.finder = finder;
		error = new Error(NotFound, 'No "$command" in (${finder.path.join(Finder.isWindows ? ";" : ":")}).');
	}

	/** Returns all instances of the searched command. **/
	public function all() {
		final executables = [];
		return stream()
			.forEach(path -> { if (!executables.contains(path)) executables.push(path); Handled.Resume; })
			.next(_ -> executables.length > 0 ? executables : error);
	}

	/** Returns the first instance of the searched command. **/
	public function first() {
		var executable = "";
		return stream()
			.forEach(path -> { executable = path; Handled.Finish; })
			.next(_ -> executable.length > 0 ? executable : error);
	}

	/** Returns a stream of instances of the searched command. **/
	public inline function stream() return finder.find(command);
}
