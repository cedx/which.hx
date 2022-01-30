import sys.FileSystem.*;

/** Runs the script. **/
function main() {
	if (exists("test/index.php")) deleteFile("test/index.php");
	for (directory in ["lib", "res"]) if (exists(directory)) Tools.removeDirectory(directory);
	Tools.cleanDirectory("var");
}
