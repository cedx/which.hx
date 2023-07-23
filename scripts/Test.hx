/** Runs the test suite. **/
function main() {
	var exitCode = 0;
	for (file in ["hl", "java", "js", "php"]) {
		Sys.println('> Testing the "$file" target...');
		exitCode = Sys.command('haxe test_$file.hxml');
		if (exitCode != 0) Sys.exit(exitCode);
	}
}
