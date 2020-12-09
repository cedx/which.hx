package which;

import tink.streams.IdealStream;
import tink.streams.Stream.Handled;

#if php
import php.NativeStructArray;
#end

/** Provides static extensions. **/
@:expose class FinderTools {

	/** Finds the instances of the specified `command` in the system path. **/
	public static function which(command: String, ?options: #if php NativeStructArray<WhichOptions> #else WhichOptions #end): WhichResult
		return new Finder(options).find(command);
}

/** Defines the options of the `FinderTools.which()` method. **/
typedef WhichOptions = Finder.FinderOptions;

/** TODO **/
abstract WhichResult(IdealStream<String>) from IdealStream<String> {

	/** TODO **/
	public function all() {
    final executables = [];
		return this.forEach(path -> {
      if (!executables.contains(path)) executables.push(path);
      Resume;
    }).next(_ -> executables.length > 0 ? executables : new Error(NotFound, "Command not found."));
	}

	/** TODO **/
	public function first() {
		var executable = "";
		return this.forEach(path -> {
			executable = path;
			Finish;
		}).next(_ -> executable.length > 0 ? executable : new Error(NotFound, "Command not found."));
	}
}
