package which;

import asys.io.Process as AsyncProcess;
import haxe.Int64;
using StringTools;
using tink.io.Source;

/** Provides information about the current process. **/
abstract class Process {

	/** The identifier of the current process's group. **/
	public static var gid(get, never): Promise<Int>;
		static inline function get_gid() return Finder.isWindows ? new Error(MethodNotAllowed, "Not supported on Windows platform.") :
			#if java Promise.resolve(Int64.toInt(new java.security.auth.module.UnixSystem().getGid()))
			#elseif js Promise.resolve(js.Node.process.getgid())
			#elseif php Promise.resolve(php.Syntax.code("posix_getgid()"))
			#else getProcessId("g") #end;

	/** The identifier of the current process's user. **/
	public static var uid(get, never): Promise<Int>;
		static inline function get_uid() return Finder.isWindows ? new Error(MethodNotAllowed, "Not supported on Windows platform.") :
			#if java Promise.resolve(Int64.toInt(new java.security.auth.module.UnixSystem().getUid()))
			#elseif js Promise.resolve(js.Node.process.getuid())
			#elseif php Promise.resolve(php.Syntax.code("posix_getuid()"))
			#else getProcessId("u") #end;

	/** Gets the numeric identity of the current process by using the "id" command. **/
	static function getProcessId(identity: String): Promise<Int> {
		final process = new AsyncProcess("id", ['-$identity']);
		return process.exitCode()
			.next(exitCode -> exitCode == 0 ? process.stdout.all() : Error.withData('The "id" command failed.', exitCode))
			.next(stdout -> {
				process.close();
				final output = stdout.toString();
				final processId = Std.parseInt(output.trim());
				processId != null ? processId : Error.withData('Unable to parse the output of the "id" command.', output);
			});
	}
}
