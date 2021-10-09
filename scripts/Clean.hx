import Tools.cleanDirectory;
import Tools.removeDirectory;
import sys.FileSystem.*;

/** Runs the script. **/
function main() {
	if (exists("index.php")) deleteFile("index.php");
	for (directory in ["lib", "res"]) if (exists(directory)) removeDirectory(directory);
	cleanDirectory("var");
}
