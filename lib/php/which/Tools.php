<?php
/**
 * Generated by Haxe 4.1.2
 */

namespace which;

use \php\Boot;
use \thenshim\_Promise\Promise_Impl_;
use \thenshim\Thenable;

/**
 * Provides static extensions.
 */
class Tools {
	/**
	 * Finds the first instance of the specified `command` in the system path.
	 * 
	 * @param string $command
	 * @param mixed $options
	 * 
	 * @return Thenable
	 */
	public static function which ($command, $options = null) {
		$all = ($options !== null) && isset($options["all"]) && $options["all"];
		$onError = (($options !== null) && isset($options["onError"]) ? $options["onError"] : null);
		$finder = new Finder($options);
		return Promise_Impl_::then($finder->find($command), function ($executables) use (&$finder, &$command, &$all, &$onError) {
			if ($executables->length > 0) {
				if ($all) {
					return $executables;
				} else {
					return ($executables->arr[0] ?? null);
				}
			} else if ($onError !== null) {
				return $onError($command);
			} else {
				throw new FinderException($command, $finder, "Command \"" . ($command??'null') . "\" not found.");
			}
		});
	}
}

Boot::registerClass(Tools::class, 'which.Tools');
