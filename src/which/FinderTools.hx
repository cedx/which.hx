package which;

import tink.streams.IdealStream;
import tink.streams.RealStream;

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
	public function all(): Promise<Array<String>>
		return this.collect().next(executables -> {
			trace('executables: $executables');
			executables.length > 0 ? arrayUnique(executables) : new Error(NotFound, "Command not found.");
		});

	/** TODO **/
	public function first(): Promise<String>
		return this.next().map(step -> switch step { // TODO: pas next()!!!! foreach()!!!!
			case Link(value, _): Success(value);
			default: Failure(new Error(NotFound, "Command not found."));
		});

	/** Removes the duplicate values from the specified `array`. **/
	function arrayUnique<T>(array: Array<T>): Array<T> {
		final list = [];
		for (value in array) if (!list.contains(value)) list.push(value);
		return list;
	}
}
