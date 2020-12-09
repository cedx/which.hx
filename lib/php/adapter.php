<?php declare(strict_types=1);
namespace which;

use which\_FinderTools\FinderStream as _FinderStream;

/**
 * Finds the first instance of the specified `command` in the system path.
 * @param string $command The command to be resolved.
 * @param array $options Options used to customize the function behavior.
 * @return FinderStream TODO A string, or an array of strings, specifying the path(s) of the found executable(s).
 * @throws FinderException The specified command was not found.
 */
function which(string $command, array $options = []): FinderStream {
	// TODO ? return new class(FinderTools::which($command, $options)) extends FinderStream {};
	return new FinderStream(FinderTools::which($command, $options));
}

/** Provides convenient access to the stream of search results. */
/* TODO ? abstract */ class FinderStream {

	/**
	 * Creates a new finder stream.
	 * @param _FinderStream $stream The object providing the stream of search results.
	 */
	function __construct(private _FinderStream $stream) {}

	/**
	 * Returns all instances of the searched command.
	 * @return string[] All instances of the searched command.
	 * @throws FinderException TODO
	 */
	function all(): array {
		$executables = null;
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
	 * @throws FinderException TODO
	 */
	function first(): string {
		$executable = null;
		$exception = null;

		$this->stream->first()->handle(function($outcome) use (&$executable, &$exception) {
			if ($outcome->tag == "Success") $executable = $outcome->params[0];
			else $exception = new FinderException($this->stream->command, $this->stream->finder);
		});

		return $exception ? throw $exception : $executable;
	}
}
