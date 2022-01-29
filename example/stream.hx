import Which;
import tink.streams.Stream.Handled;
using tink.CoreApi;

/** Finds all instances of an executable and returns them one at a time. */
function main() which("foobar").stream().forEach(path -> {
	Sys.println('The "foobar" command is located at: $path');
	Handled.Resume;
});
