import Which.which;
using tink.CoreApi;

/** Finds the first instance of an executable. */
function main() which("foobar").first().handle(outcome -> switch outcome {
	case Success(path): Sys.println('The "foobar" command is located at: $path');
	case Failure(error): Sys.println(error.message);
});
