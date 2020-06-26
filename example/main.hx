import which.FinderException;
using which.FinderTools;

/** A sample class. **/
class Example {

	/** Finds the first instance of an executable. */
	static function main() {
		"foobar".which().then(
			path -> Sys.println('The command "foobar" is located at: $path'),
			e -> Sys.println('The command "${(e: FinderException).command}" was not found.')
		);
	}
}
