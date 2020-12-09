<?php
/**
 * Generated by Haxe 4.1.4
 */

namespace which;

use \php\Boot;
use \haxe\Exception;

/**
 * An exception caused by a `Finder` in a command lookup.
 */
class FinderException extends Exception {
	/**
	 * @var string
	 * The looked up command.
	 */
	public $command;
	/**
	 * @var Finder
	 * The finder used to lookup the command.
	 */
	public $finder;

	/**
	 * Creates a new finder exception.
	 * 
	 * @param string $command
	 * @param Finder $finder
	 * @param Exception $previous
	 * 
	 * @return void
	 */
	public function __construct ($command, $finder, $previous = null) {
		parent::__construct("No \"" . ($command??'null') . "\" in (" . ($finder->path->join((Finder::get_isWindows() ? ";" : ":"))??'null') . ").", $previous);
		$this->command = $command;
		$this->finder = $finder;
	}
}

Boot::registerClass(FinderException::class, 'which.FinderException');
