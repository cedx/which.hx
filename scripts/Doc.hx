//! --class-path src --library tink_core
import Sys.*;
import sys.FileSystem.*;
import sys.io.File.*;
import which.Version.*;

/** Runs the script. **/
function main() {
	if (exists("docs")) Tools.removeDirectory("docs");

	command("haxe --define doc-gen --no-output --xml var/api.xml build.hxml");
	command("lix", [
		"run", "dox",
		"--define", "description", "Find the instances of an executable in the system path, in Haxe.",
		"--define", "source-path", "https://bitbucket.org/cedx/which.hx/src/main/src",
		"--define", "themeColor", "0xffc105",
		"--define", "version", packageVersion,
		"--define", "website", "https://bitbucket.org/cedx/which.hx",
		"--input-path", "var",
		"--output-path", "docs",
		"--title", "Which for Haxe",
		"--toplevel-package", "which"
	]);

	copy("www/favicon.ico", "docs/favicon.ico");
}
