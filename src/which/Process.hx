package which;

import thenshim.Promise;

#if nodejs
import js.Lib.typeof;
import js.Node;
import js.node.ChildProcess;
import js.node.Util;
#elseif php
import php.Global.function_exists;
#end

/** Provides information about the current process. **/
class Process {

	/** The identifier of the current process's group. **/
	public static var gid(get, never): Promise<Int>;

	/** The identifier of the current process's user. **/
	public static var uid(get, never): Promise<Int>;

	/** Gets the identifier of the current process's group. **/
	static function get_gid() {
		#if nodejs
		if (typeof(Node.process.getgid) == "function") return Promise.resolve(Node.process.getgid());
		#elseif php
		if (function_exists("posix_getgid")) return Promise.resolve(php.Syntax.code("posix_getgid()"));
		#end
		return getProcessId(ProcessIdentity.group);
	}

	/** Gets the identifier of the current process's user. **/
	static function get_uid() {
		#if nodejs
		if (typeof(Node.process.getuid) == "function") return Promise.resolve(Node.process.getuid());
		#elseif php
		if (function_exists("posix_getuid")) return Promise.resolve(php.Syntax.code("posix_getuid()"));
		#end
		return getProcessId(ProcessIdentity.user);
	}

	/** Gets the numeric `identity` of the current process. **/
	static function getProcessId(identity: ProcessIdentity): Promise<Int> {
		if (Finder.isWindows) return Promise.resolve(-1);

		#if nodejs
			final exec = Util.promisify(ChildProcess.exec);
			return exec('id -$identity').then(process -> {
				final id = Std.parseInt(process.stdout);
				id != null ? id : -1;
			});
		#else
			final process = new sys.io.Process("id", ['-$identity']);
			final id = process.exitCode() != 0 ? null : Std.parseInt(process.stdout.readLine());
			process.close();
			return Promise.resolve(id != null ? id : -1);
		#end
	}
}
