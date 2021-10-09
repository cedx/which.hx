package which;

import asys.io.Process as AsyncProcess;

using StringTools;
using tink.io.Source;

/** Provides information about the current process. **/
abstract class Process {

	/** The identifier of the current process's group. **/
	public static var gid(get, never): Promise<Int>;

	/** The identifier of the current process's user. **/
	public static var uid(get, never): Promise<Int>;

	/** Gets the identifier of the current process's group. **/
	static inline function get_gid() return getProcessId("g");

	/** Gets the identifier of the current process's user. **/
	static inline function get_uid() return getProcessId("u");

	/** Gets the numeric identity of the current process. **/
	static function getProcessId(identity: String): Promise<Int> {
		if (Finder.isWindows) return Promise.reject(new Error(MethodNotAllowed, "Not supported on Windows platform."));

		final process = new AsyncProcess("id", ['-$identity']);
		return process.exitCode()
			.next(exitCode -> exitCode == 0 ? process.stdout.all() : Failure(new Error('Process exited with a $exitCode code.')))
			.next(stdout -> {
				process.close();
				final processId = Std.parseInt(stdout.toString().trim());
				processId != null ? Success(processId) : Failure(new Error("Unable to parse the process output."));
			});
	}
}
