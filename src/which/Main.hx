package which;

import haxe.ds.Either;
import thenshim.Promise;

#if php
import php.NativeStructArray;
#end

/** The main class. **/
class Main {

	/** Finds the first instance of the specified `command` in the system path. **/
	public static function which(command: String, ?options: #if php NativeStructArray<WhichOptions> #else WhichOptions #end): Promise<Dynamic> {
		final finder = new Finder(options);
		final all = options != null && options.all != null ? options.all : false;
		final onError = options != null && options.onError != null ? options.onError : null;

		return finder.find(command).then(executables ->
			if (executables.length > 0) all ? executables : cast executables[0]
			else onError != null ? cast onError(command) : throw new FinderException(command, finder, 'Command "$command" not found.')
		);
	}
}

/** Defines the options of the `which()` method. **/
typedef WhichOptions = Finder.FinderOptions & {

	/** Value indicating whether to return an array of all executables found, instead of just the first one. **/
	var ?all: Bool;

	/** An optional error handler. */
	var ?onError: String -> Either<String, Array<String>>;
}
