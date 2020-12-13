<?php declare(strict_types=1);

use function which\which;
use which\FinderException;

require_once __DIR__."/../../vendor/autoload.php";

/** Tests the PHP adapter. */
function main(): void {
	// It should throw an exception if the command is not found.
	try {
		which("foobar")->first();
		assert("Exception not thrown.");
	}

	catch (Throwable $e) {
		assert($e instanceof FinderException);
	}

	// It should return the absolute path if the command is found.
	$suffix = DIRECTORY_SEPARATOR . (PHP_OS_FAMILY == "Windows" ? "php.exe" : "php");

	$executables = which("php")->all();
	assert(count($executables) >= 1);
	assert(str_ends_with($executables[0], $suffix));

	$executable = which("php")->first();
	assert(str_ends_with($executable, $suffix));
}

// Run the test.
main();
