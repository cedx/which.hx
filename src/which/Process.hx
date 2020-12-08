package which;

import asys.io.Process as AsyncProcess;

using StringTools;
using tink.io.Source;

#if nodejs
import js.Lib.typeof;
import js.Node;
#elseif php
import php.Global.function_exists;
import php.Syntax;
#end

/** Provides information about the current process. **/
class Process {

	/** The identifier of the current process's group. **/
	public static var gid(get, never): Promise<Int>;

	/** The identifier of the current process's user. **/
	public static var uid(get, never): Promise<Int>;

	/** Gets the identifier of the current process's group. **/
	static function get_gid(): Promise<Int> {
		#if nodejs if (typeof(Node.process.getgid) == "function") return Node.process.getgid();
		#elseif php if (function_exists("posix_getgid")) return Syntax.code("posix_getgid()"); #end
		return getProcessId(Group);
	}

	/** Gets the identifier of the current process's user. **/
	static function get_uid(): Promise<Int> {
		#if nodejs if (typeof(Node.process.getuid) == "function") return Node.process.getuid();
		#elseif php if (function_exists("posix_getuid")) return Syntax.code("posix_getuid()"); #end
		return getProcessId(User);
	}

	/** Gets the numeric `identity` of the current process. **/
	static function getProcessId(identity: ProcessIdentity): Promise<Int> {
		if (Finder.isWindows) return Failure(new Error(MethodNotAllowed, "Not supported on Windows platform."));

		final process = new AsyncProcess("id", ['-$identity']);
		return process.exitCode()
			.next(exitCode -> exitCode != 0 ? Failure(new Error("Process exited with a non-zero code.")) : process.stdout.all().next(chunk -> {
				final id = Std.parseInt(chunk.toString().rtrim());
				id != null ? Success(id) : Failure(new Error("Unable to parse the process output."));
			}))
			.next(processId -> {
				process.close();
				processId;
			});
	}
}
