<?php declare(strict_types=1);
namespace which;

/**
 * Finds the first instance of the specified `command` in the system path.
 * @param string $command The command to be resolved.
 * @param array $options Options used to customize the function behavior.
 * @return WhichResponse TODO A string, or an array of strings, specifying the path(s) of the found executable(s).
 * @throws FinderException The specified command was not found.
 */
function which(string $command, array $options = []): WhichResponse {
	return new WhichResponse(FinderTools::which($command, $options));
}

/** Represents the results of a command search. */
class WhichResponse {

	/**
	 * Creates a new search result.
	 * @param WhichResult $result The object providing the search results.
	 */
	function __construct(private WhichResult $result) {}

	/**
	 * Returns all instances of the searched command.
	 * @return string[] All instances of the searched command.
	 * @throws FinderException TODO
	 */
	function all(): array {
		$executables = null;
		$exception = null;

		$this->result->all()->handle(function($outcome) use (&$executables, &$exception) {
			if ($outcome->index == 1) $executables = $outcome->params[0];
			else $exception = new FinderException($this->result->command, $this->result->finder);
		});

		return $exception ? throw $exception : $executable;
	}

	/**
	 * Returns the first instance of the searched command.
	 * @return string The first instance of the searched command.
	 * @throws FinderException TODO
	 */
	function first(): string {
		$executable = null;
		$exception = null;

		$this->result->first()->handle(function($outcome) use (&$executable, &$exception) {
			if ($outcome->index == 1) $executable = $outcome->params[0];
			else $exception = new FinderException($this->result->command, $this->result->finder);
		});

		return $exception ? throw $exception : $executable;
	}
}
