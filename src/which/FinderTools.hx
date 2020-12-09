package which;

import tink.streams.Stream;

#if php
import php.NativeStructArray;
#end

/** Provides static extensions. **/
@:expose class FinderTools {

	/** Finds the instances of the specified `command` in the system path. **/
	public static function which(command: String, ?options: #if php NativeStructArray<WhichOptions> #else WhichOptions #end)
		return new WhichResult(new Finder(options), command);
}

/** Defines the options of the `FinderTools.which()` method. **/
typedef WhichOptions = Finder.FinderOptions;

/** Represents the results of a command search. **/
@:expose class WhichResult {

	/** The searched command. **/
	final command: String;

	/** The object used to perform the search. **/
	final finder: Finder;

	/** Creates a new search result. **/
	public function new(finder: Finder, command: String) {
		this.command = command;
		this.finder = finder;
	}

	/** Returns all the instances of the searched command. **/
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
