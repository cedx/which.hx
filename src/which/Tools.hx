package which;

import thenshim.Promise;

#if php
import php.Global.isset;
import php.NativeStructArray;
#end

/** Provides static extensions. **/
@:expose class Tools {

	/** Finds the first instance of the specified `command` in the system path. **/
	public static function which(command: String, ?options: #if php NativeStructArray<WhichOptions> #else WhichOptions #end): Promise<Dynamic> {
		#if php
			final all = options != null && isset(options["all"]) ? options["all"] : false;
			final onError = options != null && isset(options["onError"]) ? options["onError"] : null;
		#else
			final all = options != null && options.all != null ? options.all : false;
			final onError = options != null && options.onError != null ? options.onError : null;
		#end

		final finder = new Finder(options);
		return finder.find(command).then(executables ->
			if (executables.length > 0) all ? executables : cast executables[0]
			else onError != null ? onError(command) : throw new FinderException(command, finder, 'Command "$command" not found.')
		);
	}
}

/** Defines the options of the `which()` method. **/
typedef WhichOptions = Finder.FinderOptions & {

	/** Value indicating whether to return an array of all executables found, instead of just the first one. **/
	var ?all: Bool;

	/** An optional error handler. **/
	var ?onError: String -> Dynamic;
}
