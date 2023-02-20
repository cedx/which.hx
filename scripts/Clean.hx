import sys.FileSystem;
using Lambda;

/** Deletes all generated files. **/
function main() {
	if (FileSystem.exists("test/index.php")) FileSystem.deleteFile("test/index.php");
	["lib", "res"].filter(FileSystem.exists).iter(Tools.removeDirectory);
	Tools.cleanDirectory("var");
}
