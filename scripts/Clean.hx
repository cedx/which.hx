import Tools.cleanDirectory;
import Tools.removeDirectory;
import sys.FileSystem.*;

/** Runs the script. **/
function main() {
	if (exists("test/index.php")) deleteFile("test/index.php");
	for (directory in ["lib", "res"]) if (exists(directory)) removeDirectory(directory);
	cleanDirectory("var");
}
