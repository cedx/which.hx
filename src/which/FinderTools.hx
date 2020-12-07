package which;

#if php
import php.Global.isset;
import php.NativeStructArray;
#end

/** Provides static extensions. **/
@:expose class FinderTools {

	/** Finds all instances of the specified `command` in the system path. **/
	public static function which(command: String, ?options: #if php NativeStructArray<WhichOptions> #else WhichOptions #end) {
		final finder = new Finder(options);
		final onError = options != null && #if php isset(options["onError"]) ? options["onError"] #else options.onError != null ? options.onError #end : null;
		return finder.find(command).next(executables ->
			if (executables.length > 0) executables
			else onError != null ? onError(command) : new Error(NotFound, 'No "$command" in (${finder.path.join(Finder.isWindows ? ";" : ":")}).')
		);
	}

	/** Finds the first instance of the specified `command` in the system path. **/
	public static function whichOne(command: String, ?options: #if php NativeStructArray<WhichOptions> #else WhichOptions #end)
		return which(command, options).next(executables -> executables[0]);
}

/** Defines the options of the `FinderTools.which()` method. **/
typedef WhichOptions = Finder.FinderOptions & {

	/** An optional error handler. **/
	var ?onError: String -> Dynamic;
}
