import sys.FileSystem;
using Lambda;

/** Runs the script. **/
function main() {
	if (FileSystem.exists("test/index.php")) FileSystem.deleteFile("test/index.php");
	["lib", "res"].filter(FileSystem.exists).iter(Tools.removeDirectory);
	Tools.cleanDirectory("var");
}
