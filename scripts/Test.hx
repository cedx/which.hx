function main() {
	var code = 0;
	for (file in ["hl", "java", "js", "php"]) {
		Sys.println('> Testing the "$file" target...');
		if (Sys.command('haxe test_$file.hxml') != 0) code++;
	}

	Sys.exit(code);
}
