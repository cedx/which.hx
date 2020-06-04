<?php
/**
 * Generated by Haxe 4.1.1
 */

namespace which;

use \php\Boot;
use \thenshim\_Promise\Promise_Impl_;
use \thenshim\Thenable;
use \sys\io\Process as IoProcess;

/**
 * Provides information about the current process.
 */
class Process {

	/**
	 * Gets the numeric `identity` of the current process.
	 * 
	 * @param string $identity
	 * 
	 * @return Thenable
	 */
	public static function getProcessId ($identity) {
		if (Finder::get_isWindows()) {
			return Promise_Impl_::resolve(-1);
		}
		$process = new IoProcess("id", \Array_hx::wrap(["-" . ($identity??'null')]));
		$id = ($process->exitCode() !== 0 ? null : \Std::parseInt($process->stdout->readLine()));
		$process->close();
		return Promise_Impl_::resolve(($id !== null ? $id : -1));
	}

	/**
	 * Gets the identifier of the current process's group.
	 * 
	 * @return Thenable
	 */
	public static function get_gid () {
		if (function_exists("posix_getgid")) {
			return Promise_Impl_::resolve(posix_getgid());
		}
		return Process::getProcessId("g");
	}

	/**
	 * Gets the identifier of the current process's user.
	 * 
	 * @return Thenable
	 */
	public static function get_uid () {
		if (function_exists("posix_getuid")) {
			return Promise_Impl_::resolve(posix_getuid());
		}
		return Process::getProcessId("u");
	}
}

Boot::registerClass(Process::class, 'which.Process');
Boot::registerGetters('which\\Process', [
	'uid' => true,
	'gid' => true
]);
