package which;

import sys.FileSystem;
import sys.FileStat;

using Lambda;
using StringTools;
using haxe.io.Path;

#if nodejs
import js.node.Fs;
import js.node.Util;
#elseif php
import php.Syntax;
#end

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
	public function isExecutable(file: String): Promise<Bool> {
		#if nodejs
			final stat = Util.promisify(Fs.stat);
			return stat(file).then(stats ->
				if (stats.isFile()) isWindows ? Promise.resolve(checkFileExtension(file)) : checkFilePermissions(stats)
				else Promise.resolve(false)
			).catchError(_ -> false);
		#else
			if (!FileSystem.exists(file) || FileSystem.isDirectory(file)) return Promise.resolve(false);
			#if php if (Syntax.code("is_executable({0})", file)) return Promise.resolve(true); #end
			return isWindows ? Promise.resolve(checkFileExtension(file)) : checkFilePermissions(FileSystem.stat(file));
		#end
	}

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
	function checkFilePermissions(stats: FileStat) {
		var procUid = -1;
		return Future.sync(stats.mode & 1 != 0)
			.next(isExec -> isExec || (stats.mode & 8 == 0) ? isExec : Process.gid.next(gid -> stats.gid == gid))
			.next(isExec -> isExec || (stats.mode & 64 == 0) ? isExec : Process.uid.next(uid -> { procUid = uid; stats.uid == uid; }))
			.next(isExec -> isExec || (stats.mode & (64 | 8) == 0) ? isExec : procUid == 0);
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
