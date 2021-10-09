import Sys.*;
import Tools.removeDirectory;
import haxe.Json;
import sys.FileSystem.*;
import sys.io.File.*;

/** Runs the script. **/
function main() {
	if (exists("docs/api")) removeDirectory("docs/api");

	command("haxe --define doc-gen --no-output --xml var/api.xml build.hxml");
	command("lix", [
		"run", "dox",
		"--define", "description", "Find the instances of an executable in the system path, in Haxe.",
		"--define", "source-path", "https://github.com/cedx/which.hx/blob/main/src",
		"--define", "themeColor", "0xffc105",
		"--define", "version", Json.parse(getContent("haxelib.json")).version,
		"--define", "website", "https://cedx.github.io/which.hx",
		"--input-path", "var",
		"--output-path", "docs/api",
		"--title", "Which for Haxe",
		"--toplevel-package", "which"
	]);

	copy("docs/favicon.ico", "docs/api/favicon.ico");
}
