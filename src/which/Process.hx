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
	static function getProcessId(identity: String) {
		if (Finder.isWindows) return Promise.reject(new Error(MethodNotAllowed, "Not supported on Windows platform."));

		final process = new AsyncProcess("id", ['-$identity']);
		return process.exitCode()
			.next(exitCode -> exitCode != 0 ? new Error('Process exited with a $exitCode code.') : process.stdout.all().next(chunk -> {
				final processId = Std.parseInt(chunk.toString().trim());
				processId != null ? processId : new Error("Unable to parse the process output.");
			}))
			.next(processId -> {
				process.close();
				processId;
			});
	}
}
