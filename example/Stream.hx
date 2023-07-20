import Which;
import tink.streams.Stream.Handled;
using tink.CoreApi;

/** Finds all instances of an executable and returns them one at a time. */
function main() {
	Sys.println('The "foobar" command is available at these locations:');
	which("foobar").stream().forEach(path -> {
		Sys.println('- $path');
		Handled.Resume;
	});
}
