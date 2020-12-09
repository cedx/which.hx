<?php declare(strict_types=1);

use function which\which;
use which\FinderException;

/** Finds the first instance of an executable. */
function main(): void {
	try {
		$path = which("foobar")->first();
		print "The 'foobar' command is located at: $path";
	}

	catch (FinderException $e) {
		print $e->getMessage();
	}
}
