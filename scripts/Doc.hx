//! --class-path src --library tink_core
import sys.FileSystem;
import sys.io.File;
import which.Version;

/** Builds the documentation. **/
function main() {
	if (FileSystem.exists("docs")) Tools.removeDirectory("docs");

	Sys.command("haxe --define doc-gen --no-output --xml var/api.xml build.hxml");
	Sys.command("lix", ["run", "dox",
		"--define", "description", "Find the instances of an executable in the system path, in Haxe.",
		"--define", "source-path", "https://github.com/cedx/which.hx/blob/main/src",
		"--define", "themeColor", "0xea8220",
		"--define", "version", Version.packageVersion,
		"--define", "website", "https://docs.belin.io/which.hx",
		"--input-path", "var",
		"--output-path", "docs",
		"--title", "Which for Haxe",
		"--toplevel-package", "which"
	]);

	File.copy("www/favicon.ico", "docs/favicon.ico");
}
