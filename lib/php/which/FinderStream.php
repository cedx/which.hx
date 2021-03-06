<?php
/**
 * Generated by Haxe 4.1.5
 */

namespace which;

use \php\_Boot\HxAnon;
use \tink\core\_Future\SyncFuture;
use \php\Boot;
use \tink\core\TypedError;
use \tink\core\Outcome;
use \tink\streams\Handled;
use \tink\core\_Lazy\LazyConst;
use \tink\streams\_Stream\Handler_Impl_;
use \tink\core\_Future\Future_Impl_;
use \tink\core\FutureObject;

/**
 * Provides convenient access to the stream of search results.
 */
class FinderStream {
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
	 * Creates a new finder stream.
	 * 
	 * @param string $command
	 * @param Finder $finder
	 * 
	 * @return void
	 */
	public function __construct ($command, $finder) {
		$this->command = $command;
		$this->finder = $finder;
	}

	/**
	 * Returns all instances of the searched command.
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
					"lineNumber" => 30,
					"className" => "which.FinderStream",
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
					"lineNumber" => 39,
					"className" => "which.FinderStream",
					"methodName" => "first",
				])))));
			}
		});
	}
}

Boot::registerClass(FinderStream::class, 'which.FinderStream');
