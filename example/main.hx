using tink.CoreApi;
using which.FinderTools;

/** A sample class. **/
class Example {

	/** Finds the first instance of an executable. */
	static function main() {
		"foobar".which().first().handle(outcome -> switch outcome {
			case Success(path): Sys.println('The command "foobar" is located at: $path');
			case Failure(error): Sys.println(error.message);
		});
	}
}
