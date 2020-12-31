<?php
/**
 * Generated by Haxe 4.1.5
 */

namespace which;

use \tink\Cli;
use \php\_Boot\HxAnon;
use \tink\core\_Future\SyncFuture;
use \php\Boot;
use \tink\core\Noise;
use \tink\core\TypedError;
use \tink\core\Outcome;
use \tink\cli\prompt\RetryPrompt;
use \tink\cli\Doc0;
use \tink\core\_Lazy\LazyConst;
use \tink\cli\doc\DefaultFormatter;
use \tink\cli\Router0;
use \tink\core\_Promise\Promise_Impl_;
use \tink\core\FutureObject;

/**
 * Find the instances of an executable in the system path.
 */
class Program {
	/**
	 * @var bool
	 * List all instances of executables found (instead of just the first one).
	 */
	public $all;
	/**
	 * @var bool
	 * Output usage information.
	 */
	public $help;
	/**
	 * @var bool
	 * Output the version number.
	 */
	public $version;

	/**
	 * Application entry point.
	 * 
	 * @return void
	 */
	public static function main () {
		cli_set_process_title("Which.hx");
		$this1 = new Program();
		(new Router0($this1, new RetryPrompt(5)))->process(\Sys::args())->handle(Boot::getStaticClosure(Cli::class, 'exit'));
	}

	/**
	 * Creates a new program.
	 * 
	 * @return void
	 */
	public function __construct () {
		$this->version = false;
		$this->help = false;
		$this->all = false;
	}

	/**
	 * <command> : The name of the command to find.
	 * 
	 * @param \Array_hx $rest
	 * 
	 * @return FutureObject
	 */
	public function run ($rest) {
		if ($this->help || $this->version) {
			echo((\Std::string(($this->help ? (new DefaultFormatter())->format(Doc0::get()) : "2.0.2"))??'null') . \PHP_EOL);
			return new SyncFuture(new LazyConst(Outcome::Success(Noise::Noise())));
		}
		if (($rest->length < 1) || ((\Sys::getEnv("HAXELIB_RUN") === "1") && ($rest->length < 2))) {
			return new SyncFuture(new LazyConst(Outcome::Failure(new TypedError(400, "You must provide the name of a command to find.", new HxAnon([
				"fileName" => "src/which/Program.hx",
				"lineNumber" => 47,
				"className" => "which.Program",
				"methodName" => "run",
			])))));
		}
		return Promise_Impl_::next(($this->all ? FinderTools::which(($rest->arr[0] ?? null))->all() : Promise_Impl_::next(FinderTools::which(($rest->arr[0] ?? null))->first(), function ($executable) {
			return new SyncFuture(new LazyConst(Outcome::Success(\Array_hx::wrap([$executable]))));
		})), function ($executables) {
			\Lambda::iter($executables, Boot::getStaticClosure(\Sys::class, 'println'));
			return new SyncFuture(new LazyConst(Outcome::Success(Noise::Noise())));
		});
	}
}

Boot::registerClass(Program::class, 'which.Program');
