<?php
/**
 * Generated by Haxe 4.1.4
 */

namespace which;

use \php\_Boot\HxAnon;
use \tink\core\_Future\SyncFuture;
use \php\Boot;
use \tink\core\TypedError;
use \tink\core\Outcome;
use \tink\core\_Lazy\LazyConst;
use \tink\core\_Promise\Promise_Impl_;
use \tink\core\FutureObject;

/**
 * Provides static extensions.
 */
class FinderTools {
	/**
	 * Finds all instances of the specified `command` in the system path.
	 * 
	 * @param string $command
	 * @param mixed $options
	 * 
	 * @return FutureObject
	 */
	public static function which ($command, $options = null) {
		$finder = new Finder(new HxAnon($options));
		$onError = (($options !== null) && isset($options["onError"]) ? $options["onError"] : null);
		return Promise_Impl_::next($finder->find($command), function ($executables) use (&$finder, &$command, &$onError) {
			if ($executables->length > 0) {
				return new SyncFuture(new LazyConst(Outcome::Success($executables)));
			} else if ($onError !== null) {
				return $onError($command);
			} else {
				$e = "No \"" . ($command??'null') . "\" in (" . ($finder->path->join((Finder::get_isWindows() ? ";" : ":"))??'null') . ").";
				return new SyncFuture(new LazyConst(Outcome::Failure(new TypedError(404, $e, new HxAnon([
					"fileName" => "src/which/FinderTools.hx",
					"lineNumber" => 17,
					"className" => "which.FinderTools",
					"methodName" => "which",
				])))));
			}
		});
	}

	/**
	 * Finds the first instance of the specified `command` in the system path.
	 * 
	 * @param string $command
	 * @param mixed $options
	 * 
	 * @return FutureObject
	 */
	public static function whichOne ($command, $options = null) {
		return Promise_Impl_::next(FinderTools::which($command, $options), function ($executables) {
			return new SyncFuture(new LazyConst(Outcome::Success(($executables->arr[0] ?? null))));
		});
	}
}

Boot::registerClass(FinderTools::class, 'which.FinderTools');
