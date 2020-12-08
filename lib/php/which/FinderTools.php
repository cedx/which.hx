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
	 * Finds the instances of the specified `command` in the system path.
	 * 
	 * @param string $command
	 * @param mixed $options
	 * 
	 * @return FutureObject
	 */
	public static function which ($command, $options = null) {
		$finder = new Finder(new HxAnon($options));
		return Promise_Impl_::next($finder->find($command), function ($executables) use (&$finder, &$command) {
			if ($executables->length > 0) {
				return new SyncFuture(new LazyConst(Outcome::Success($executables)));
			} else {
				$e = "No \"" . ($command??'null') . "\" in (" . ($finder->path->join((Finder::get_isWindows() ? ";" : ":"))??'null') . ").";
				return new SyncFuture(new LazyConst(Outcome::Failure(new TypedError(404, $e, new HxAnon([
					"fileName" => "src/which/FinderTools.hx",
					"lineNumber" => 15,
					"className" => "which.FinderTools",
					"methodName" => "which",
				])))));
			}
		});
	}
}

Boot::registerClass(FinderTools::class, 'which.FinderTools');
