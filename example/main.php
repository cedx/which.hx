<?php declare(strict_types=1);

use function which\which;
use which\FinderException;

/** Finds the first instance of an executable. */
function main(): void {
	try {
		$path = which("foobar");
		print "The command 'foobar' is located at: $path";
	}

	catch (FinderException $e) {
		print "The command '{$e->command}' was not found.";
	}
}
