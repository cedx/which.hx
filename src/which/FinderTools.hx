package which;

import tink.streams.Stream;

#if php
import php.NativeStructArray;
#end

/** Provides convenient access to the stream of search results. **/
private class FinderStream {

	/** The searched command. **/
	final command: String;

	/** The object used to perform the search. **/
	final finder: Finder;

	/** Creates a new finder stream. **/
	public function new(command: String, finder: Finder) {
		this.command = command;
		this.finder = finder;
	}

	/** Returns all instances of the searched command. **/
	public function all() {
		final executables = [];
		return finder.find(command).forEach(path -> {
			if (!executables.contains(path)) executables.push(path);
			Resume;
		}).next(_ -> executables.length > 0 ? executables : new Error(NotFound, 'No "$command" in (${finder.path.join(Finder.isWindows ? ";" : ":")}).'));
	}

	/** Returns the first instance of the searched command. **/
	public function first() {
		var executable = "";
		return finder.find(command).forEach(path -> {
			executable = path;
			Finish;
		}).next(_ -> executable.length > 0 ? executable : new Error(NotFound, 'No "$command" in (${finder.path.join(Finder.isWindows ? ";" : ":")}).'));
	}
}

/** Provides helper methods for handling `Finder` instances. **/
@:expose class FinderTools {

	/** Finds the instances of the specified `command` in the system path. **/
	public static function which(command: String, ?options: #if php NativeStructArray<Finder.FinderOptions> #else Finder.FinderOptions #end)
		return new FinderStream(command, new Finder(options));
}
