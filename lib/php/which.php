<?php declare(strict_types=1);
namespace which;

/**
 * Finds the first instance of the specified `command` in the system path.
 * @param string $command The command to be resolved.
 * @param array $options Options used to customize the function behavior.
 * @return string|string[] A string, or an array of strings, specifying the path(s) of the found executable(s).
 * @throws FinderException The specified command was not found.
 */
function which(string $command, array $options = null) {
	$executable = null;
	FinderTools::which($command, $options)->then(function($result) use (&$executable) { $executable = $result; });
	return $executable;
}
