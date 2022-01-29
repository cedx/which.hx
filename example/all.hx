import Which;
using tink.CoreApi;

/** Finds all instances of an executable. */
function main() which("foobar").all().handle(outcome -> switch outcome {
	case Success(paths):
		Sys.println('The "foobar" command is available at these locations:');
		for (path in paths) Sys.println('- $path');
	case Failure(error):
		Sys.println(error.message);
});
