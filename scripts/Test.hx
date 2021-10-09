import Sys.*;

/** Runs the script. **/
function main() for (file in ["hl", "js", "jvm", "php"]) {
	println('> Testing "$file" target...');
	command('haxe test_$file.hxml');
}
