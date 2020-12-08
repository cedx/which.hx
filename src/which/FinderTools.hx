package which;

#if php
import php.NativeStructArray;
#end

/** Provides static extensions. **/
@:expose class FinderTools {

	/** Finds the instances of the specified `command` in the system path. **/
	public static function which(command: String, ?options: #if php NativeStructArray<WhichOptions> #else WhichOptions #end): WhichResult {
		final finder = new Finder(options);
		return finder.find(command).next(executables -> executables.length > 0
			? executables
			: new Error(NotFound, 'No "$command" in (${finder.path.join(Finder.isWindows ? ";" : ":")}).')
		);
	}
}

/** Defines the options of the `FinderTools.which()` method. **/
typedef WhichOptions = Finder.FinderOptions;

/** TODO **/
abstract WhichResult(Promise<Array<String>>) from Promise<Array<String>> {

	/** TODO **/
	public inline function all() return this;

	/** TODO **/
	public inline function first() return this.next(executables -> executables[0]);
}
