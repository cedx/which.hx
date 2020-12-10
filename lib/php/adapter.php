<?php declare(strict_types=1);
namespace which;

use which\_FinderTools\FinderStream as _FinderStream;

/**
 * Finds the instances of the specified `command` in the system path.
 * @param string $command The command to be resolved.
 * @param array $options Options used to customize the function behavior.
 * @return FinderStream An object providing the stream of search results.
 * @throws FinderException The specified command was not found.
 */
function which(string $command, array $options = []): FinderStream {
	return new class(FinderTools::which($command, $options)) extends FinderStream {};
}

/** Provides convenient access to the stream of search results. */
abstract class FinderStream {

	/**
	 * Creates a new finder stream.
	 * @param _FinderStream $stream The object providing the stream of search results.
	 */
	function __construct(private _FinderStream $stream) {}

	/**
	 * Returns all instances of the searched command.
	 * @return string[] All instances of the searched command.
	 * @throws FinderException The command was not found.
	 */
	function all(): array {
		$executables = [];
		$exception = null;

		$this->stream->all()->handle(function($outcome) use (&$executables, &$exception) {
			if ($outcome->tag == "Success") $executables = $outcome->params[0];
			else $exception = new FinderException($this->stream->command, $this->stream->finder);
		});

		return $exception ? throw $exception : $executables->arr;
	}

	/**
	 * Returns the first instance of the searched command.
	 * @return string The first instance of the searched command.
	 * @throws FinderException The command was not found.
	 */
	function first(): string {
		$executable = "";
		$exception = null;

		$this->stream->first()->handle(function($outcome) use (&$executable, &$exception) {
			if ($outcome->tag == "Success") $executable = $outcome->params[0];
			else $exception = new FinderException($this->stream->command, $this->stream->finder);
		});

		return $exception ? throw $exception : $executable;
	}
}
