//! --class-path src --library tink_core
import Sys.*;
import Tools.compress;
import which.Version.*;

/** Runs the script. **/
function main() {
	command("haxe run.hxml");
	compress(["CHANGELOG.md", "LICENSE.md", "README.md", "haxelib.json", "run.n", "src"], "var/haxelib.zip");
	command("haxelib submit var/haxelib.zip");
	for (action in ["tag", "push origin"]) command('git $action v$packageVersion');
}
