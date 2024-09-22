/** Runs the test suite. **/
function main() {
	var exitCode = 0;
	for (file in ["hl", "java", "nodejs", "php"]) {
		Sys.println('> Testing the "$file" target...');
		if (Sys.command('haxe test_$file.hxml') != 0) exitCode++;
	}

	Sys.exit(exitCode);
}
