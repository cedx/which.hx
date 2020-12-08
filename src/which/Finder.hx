package which;

import asys.FileSystem;
import asys.FileStat;

using Lambda;
using StringTools;
using haxe.io.Path;

/** Finds the instances of an executable in the system path. **/
@:expose class Finder {

	/** Value indicating whether the current platform is Windows. **/
	public static var isWindows(get, never): Bool;

	/** The list of executable file extensions. **/
	public final extensions: Array<String>;

	/** The list of system paths. **/
	public final path: Array<String>;

	/** Creates a new finder. **/
	public function new(?options: FinderOptions) {
		final separator = isWindows ? ";" : ":";

		final pathExt = Sys.getEnv("PATHEXT");
		extensions = pathExt != null ? pathExt.split(separator).map(item -> item.toLowerCase()) : [".exe", ".cmd", ".bat", ".com"];

		final pathEnv = Sys.getEnv("PATH");
		path = pathEnv != null ? pathEnv.split(separator) : [];

		if (options != null) {
			if (options.extensions != null) extensions = options.extensions.map(item -> item.toLowerCase());
			if (options.path != null) path = options.path;
		}
	}

	/** Gets a value indicating whether the current platform is Windows. **/
	static function get_isWindows() return Sys.systemName() == "Windows" || {
		final osType = Sys.getEnv("OSTYPE");
		osType == "cygwin" || osType == "msys";
	};

	/** Finds the instances of the specified `command` in the system path. **/
	public function find(command: String): Promise<Array<String>> {
		final paths = isWindows ? [Sys.getCwd()] : [];
		return paths.concat(path).map(item -> findExecutables(item, command)).inParallel().next(results -> arrayUnique(results.flatten()));
	}

	/** Gets a value indicating whether the specified `file` is executable. **/
	public function isExecutable(file: String): Promise<Bool>
		return FileSystem.exists(file)
			.next(exists -> exists ? FileSystem.isDirectory(file) : new Error(NotFound, file))
			.next(isDirectory -> isDirectory ? new Error(UnprocessableEntity, file) : file)
			.next(_ -> isWindows ? checkFileExtension(file) : FileSystem.stat(file).next(stat -> checkFilePermissions(stat)))
			.recover(_ -> false);

	/** Removes the duplicate values from the specified `array`. **/
	function arrayUnique<T>(array: Array<T>): Array<T> {
		var list = [];
		for (value in array) if (!list.contains(value)) list.push(value);
		return list;
	}

	/** Checks that the specified `file` is executable according to the executable file extensions. **/
	function checkFileExtension(file: String)
		return extensions.contains('.${file.extension().toLowerCase()}');

	/** Checks that the file represented by the specified `stats` is executable according to its permissions. **/
	function checkFilePermissions(stat: FileStat) {
		var processUid = -1;
		return Future.sync(stat.mode & 1 != 0)
			.next(isExec -> isExec || (stat.mode & 8 == 0) ? true : Process.gid.next(gid -> stat.gid == gid))
			.next(isExec -> isExec || (stat.mode & 64 == 0) ? true : Process.uid.next(uid -> { processUid = uid; stat.uid == uid; }))
			.next(isExec -> isExec || (stat.mode & (64 | 8) == 0) ? true : processUid == 0)
			.recover(_ -> false);
	}

	/** Finds the instances of the specified `command` in the given `directory`. **/
	function findExecutables(directory: String, command: String) {
		final basePath = FileSystem.absolutePath(directory);
		final paths = [""].concat(isWindows ? extensions : []).map(item -> Path.join([basePath, '$command$item']).replace("/", isWindows ? "\\" : "/"));
		return paths.map(item -> isExecutable(item)).inParallel().next(results -> Success([for (index => isExec in results) if (isExec) paths[index]]));
	}
}

/** Defines the options of a `Finder` instance. **/
typedef FinderOptions = {

	/** The list of executable file extensions. **/
	var ?extensions: Array<String>;

	/** The list of system paths. **/
	var ?path: Array<String>;
}
