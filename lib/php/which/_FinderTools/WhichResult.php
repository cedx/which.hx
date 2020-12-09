<?php
/**
 * Generated by Haxe 4.1.4
 */

namespace which\_FinderTools;

use \php\_Boot\HxAnon;
use \tink\core\_Future\SyncFuture;
use \php\Boot;
use \tink\core\TypedError;
use \tink\core\Outcome;
use \tink\streams\Handled;
use \tink\core\_Lazy\LazyConst;
use \tink\streams\_Stream\Handler_Impl_;
use \tink\core\_Future\Future_Impl_;
use \which\Finder;
use \tink\core\FutureObject;

/**
 * Represents the results of a command search.
 */
class WhichResult {
	/**
	 * @var string
	 * The searched command.
	 */
	public $command;
	/**
	 * @var Finder
	 * The object used to perform the search.
	 */
	public $finder;

	/**
	 * Creates a new search result.
	 * 
	 * @param Finder $finder
	 * @param string $command
	 * 
	 * @return void
	 */
	public function __construct ($finder, $command) {
		$this->command = $command;
		$this->finder = $finder;
	}

	/**
	 * Returns all the instances of the searched command.
	 * 
	 * @return FutureObject
	 */
	public function all () {
		$_gthis = $this;
		$executables = new \Array_hx();
		return Future_Impl_::next($this->finder->find($this->command)->forEach(Handler_Impl_::ofSafe(function ($path) use (&$executables) {
			if ($executables->indexOf($path) === -1) {
				$executables->arr[$executables->length++] = $path;
			}
			return new SyncFuture(new LazyConst(Handled::Resume()));
		})), function ($_) use (&$_gthis, &$executables) {
			if ($executables->length > 0) {
				return new SyncFuture(new LazyConst(Outcome::Success($executables)));
			} else {
				$e = "No \"" . ($_gthis->command??'null') . "\" in (" . ($_gthis->finder->path->join((Finder::get_isWindows() ? ";" : ":"))??'null') . ").";
				return new SyncFuture(new LazyConst(Outcome::Failure(new TypedError(404, $e, new HxAnon([
					"fileName" => "src/which/FinderTools.hx",
					"lineNumber" => 41,
					"className" => "which._FinderTools.WhichResult",
					"methodName" => "all",
				])))));
			}
		});
	}

	/**
	 * Returns the first instance of the searched command.
	 * 
	 * @return FutureObject
	 */
	public function first () {
		$_gthis = $this;
		$executable = "";
		return Future_Impl_::next($this->finder->find($this->command)->forEach(Handler_Impl_::ofSafe(function ($path) use (&$executable) {
			$executable = $path;
			return new SyncFuture(new LazyConst(Handled::Finish()));
		})), function ($_) use (&$executable, &$_gthis) {
			if (mb_strlen($executable) > 0) {
				return new SyncFuture(new LazyConst(Outcome::Success($executable)));
			} else {
				$e = "No \"" . ($_gthis->command??'null') . "\" in (" . ($_gthis->finder->path->join((Finder::get_isWindows() ? ";" : ":"))??'null') . ").";
				return new SyncFuture(new LazyConst(Outcome::Failure(new TypedError(404, $e, new HxAnon([
					"fileName" => "src/which/FinderTools.hx",
					"lineNumber" => 50,
					"className" => "which._FinderTools.WhichResult",
					"methodName" => "first",
				])))));
			}
		});
	}
}

Boot::registerClass(WhichResult::class, 'which._FinderTools.WhichResult');