import sys.FileSystem;

/** Runs the script. **/
function main() {
	if (FileSystem.exists("test/index.php")) FileSystem.deleteFile("test/index.php");
	for (directory in ["lib", "res"].filter(FileSystem.exists)) Tools.removeDirectory(directory);
	Tools.cleanDirectory("var");
}
