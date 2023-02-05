//! --class-path src
import which.Version;

/** Runs the script. **/
function main() {
	Tools.compress(["CHANGELOG.md", "LICENSE.md", "README.md", "haxelib.json", "run.n", "src"], "var/haxelib.zip");
	Sys.command("haxelib submit var/haxelib.zip");
	for (action in ["tag", "push origin"]) Sys.command('git $action v${Version.packageVersion}');
}
