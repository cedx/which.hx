<?php
/**
 * Generated by Haxe 4.1.2
 */

namespace which;

use \tink\Cli;
use \thenshim\PromiseTools;
use \tink\core\_Future\SyncFuture;
use \php\Boot;
use \tink\core\Outcome;
use \tink\cli\prompt\RetryPrompt;
use \tink\cli\Doc0;
use \tink\core\_Lazy\LazyConst;
use \tink\cli\doc\DefaultFormatter;
use \tink\cli\Router0;
use \thenshim\_Promise\Promise_Impl_;
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
	 * Silence the output, just return the exit code (0 if any executable is found, otherwise 1).
	 */
	public $silent;
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
		$this->silent = false;
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
		$_gthis = $this;
		if ($this->help) {
			echo((\Std::string((new DefaultFormatter())->format(Doc0::get()))??'null') . PHP_EOL);
			exit(0);
		}
		if ($this->version) {
			echo("1.0.0" . PHP_EOL);
			exit(0);
		}
		if ($rest->length === 0) {
			echo("You must provide the name of a command to find." . PHP_EOL);
			exit(64);
		}
		return new SyncFuture(new LazyConst(Outcome::Success(PromiseTools::catch_(Promise_Impl_::then(FinderTools::which(($rest->arr[0] ?? null), ["all" => $this->all]), function ($executables) use (&$_gthis) {
			if (!$_gthis->silent) {
				if (is_string($executables)) {
					$executables = \Array_hx::wrap([$executables]);
				}
				\Lambda::iter($executables, Boot::getStaticClosure(\Sys::class, 'println'));
			}
		}), function ($e) {
			exit((($e instanceof FinderException) ? 1 : 2));
		}))));
	}
}

Boot::registerClass(Program::class, 'which.Program');
