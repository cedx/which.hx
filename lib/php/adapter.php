<?php declare(strict_types=1);
namespace which;

/**
 * Finds the instances of the specified `command` in the system path.
 * @param $command The command to be resolved.
 * @param $options Options used to customize the function behavior.
 * @return An object providing the stream of search results.
 * @throws FinderException The specified command was not found.
 */
function which(string $command, array $options = []): _FinderStream {
	return new _FinderStream(FinderTools::which($command, $options));
}

/** Provides convenient access to the stream of search results. */
class _FinderStream {

	/**
	 * Creates a new finder stream.
	 * @param $stream The object providing the stream of search results.
	 */
	function __construct(private FinderStream $stream) {}

	/**
	 * Returns all instances of the searched command.
	 * @return All instances of the searched command.
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
	 * @return The first instance of the searched command.
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
