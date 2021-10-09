using tink.CoreApi;
using which.FinderTools;

/** Finds the first instance of an executable. */
function main() {
	"foobar".which().first().handle(outcome -> switch outcome {
		case Success(path): Sys.println('The "foobar" command is located at: $path');
		case Failure(error): Sys.println(error.message);
	});
}
