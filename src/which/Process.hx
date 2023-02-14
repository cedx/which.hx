package which;

import asys.io.Process as AsysProcess;
using StringTools;
using tink.io.Source;

/** Provides information about the current process. **/
abstract class Process {

	/** The identifier of the current process's group. **/
	public static var gid(get, never): Promise<Int>;
		static inline function get_gid() return getProcessId("g");

	/** The identifier of the current process's user. **/
	public static var uid(get, never): Promise<Int>;
		static inline function get_uid() return getProcessId("u");

	/** Gets the numeric identity of the current process. **/
	static function getProcessId(identity: String): Promise<Int> {
		if (Finder.isWindows) return Promise.reject(new Error(MethodNotAllowed, "Not supported on Windows platform."));

		final process = new AsysProcess("id", ['-$identity']);
		return process.exitCode()
			.next(exitCode -> exitCode == 0 ? process.stdout.all() : new Error('Process exited with a $exitCode code.'))
			.next(stdout -> {
				process.close();
				final processId = Std.parseInt(stdout.toString().trim());
				processId != null ? processId : new Error("Unable to parse the process output.");
			});
	}
}
