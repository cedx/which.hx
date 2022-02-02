/** Runs the script. **/
function main() for (file in ["java", "js", "php"]) {
	Sys.println('> Testing "$file" target...');
	Sys.command('haxe test_$file.hxml');
}
