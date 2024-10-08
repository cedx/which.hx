package which;

import tink.streams.RealStream;
import tink.streams.Stream.Handled;

/** Provides convenient access to the stream of search results. **/
final class ResultSet {

	/** The searched command. **/
	final command: String;

	/** The finder used to perform the search. **/
	final finder: Finder;

	/** Creates a new result set. **/
	public function new(command: String, finder: Finder) {
		this.command = command;
		this.finder = finder;
	}

	/** Returns all instances of the searched command. **/
	public function all(): Promise<Array<String>> {
		final error = new Error(NotFound, 'No "$command" in (${finder.paths.join(Finder.isWindows ? ";" : ":")}).');
		final executables = [];
		return stream()
			.forEach(path -> { if (!executables.contains(path)) executables.push(path); Handled.Resume; })
			.next(_ -> executables.length > 0 ? executables : error);
	}

	/** Returns the first instance of the searched command. **/
	public function first(): Promise<String> {
		final error = new Error(NotFound, 'No "$command" in (${finder.paths.join(Finder.isWindows ? ";" : ":")}).');
		final executables = [];
		return stream()
			.forEach(path -> { executables.push(path); Handled.Finish; })
			.next(_ -> executables.length > 0 ? executables[0] : error);
	}

	/** Returns a stream of instances of the searched command. **/
	public inline function stream(): RealStream<String>
		return finder.find(command);
}
