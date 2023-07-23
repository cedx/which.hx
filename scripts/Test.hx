/** Runs the test suite. **/
function main() for (file in ["hl", "java", "js", "php"]) {
	Sys.println('> Testing the "$file" target...');
	var exitCode = Sys.command('haxe test_$file.hxml');
	if (exitCode != 0) Sys.exit(exitCode);
}
