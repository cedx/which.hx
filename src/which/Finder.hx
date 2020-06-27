package which;

import haxe.io.Path;
import sys.FileSystem;
import sys.FileStat;
import thenshim.Promise;

using Lambda;
using StringTools;
using thenshim.PromiseTools;

#if nodejs
import js.node.Fs;
import js.node.Util;
#elseif php
import php.Global.isset;
import php.NativeStructArray;
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
	public function new(?options: #if php NativeStructArray<FinderOptions> #else FinderOptions #end) {
		final separator = isWindows ? ";" : ":";

		final pathExt = Sys.getEnv("PATHEXT");
		extensions = pathExt != null ? pathExt.split(separator).map(item -> item.toLowerCase()) : [".exe", ".cmd", ".bat", ".com"];

		final pathEnv = Sys.getEnv("PATH");
		path = pathEnv != null ? pathEnv.split(separator) : [];

		if (options != null) {
			#if php
				if (isset(options["extensions"])) extensions = options["extensions"].map(item -> item.toLowerCase());
				if (isset(options["path"])) path = options["path"];
			#else
				if (options.extensions != null) extensions = options.extensions.map(item -> item.toLowerCase());
				if (options.path != null) path = options.path;
			#end
		}
	}

	/** Gets a value indicating whether the current platform is Windows. **/
	static function get_isWindows()
		return Sys.systemName() == "Windows" || {
			final osType = Sys.getEnv("OSTYPE");
			osType == "cygwin" || osType == "msys";
		};

	/** Finds the instances of the specified `command` in the system path. **/
	public function find(command: String): Promise<Array<String>> {
		final paths = isWindows ? [Sys.getCwd()] : [];
		return paths.concat(path).map(item -> findExecutables(item, command)).all().then(results -> arrayUnique(results.flatten()));
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
			#if php if (php.Syntax.code("is_executable({0})", file)) return Promise.resolve(true); #end
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
		return extensions.contains('.${Path.extension(file).toLowerCase()}');

	/** Checks that the file represented by the specified `stats` is executable according to its permissions. **/
	function checkFilePermissions(stats: FileStat): Promise<Bool> {
		var procUid = -1;
		return Promise.resolve(stats.mode & 1 != 0)
			.then(isExec -> isExec || (stats.mode & 8 == 0) ? Promise.resolve(isExec) : Process.gid.then(gid -> stats.gid == gid))
			.then(isExec -> isExec || (stats.mode & 64 == 0) ? Promise.resolve(isExec) : Process.uid.then(uid -> { procUid = uid; stats.uid == uid; }))
			.then(isExec -> isExec || (stats.mode & (64 | 8) == 0) ? isExec : procUid == 0);
	}

	/** Finds the instances of the specified `command` in the given `directory`. **/
	function findExecutables(directory: String, command: String): Promise<Array<String>> {
		final basePath = Path.isAbsolute(directory) ? directory : Path.join([Sys.getCwd(), directory]);
		final paths = [""].concat(isWindows ? extensions : []).map(item -> Path.join([basePath, '$command$item']).replace("/", isWindows ? "\\" : "/"));
		return paths.map(item -> isExecutable(item)).all().then(results -> [for (index => isExec in results) if (isExec) paths[index]]);
	}
}

/** Defines the options of a `Finder` instance. **/
typedef FinderOptions = {

	/** The list of executable file extensions. **/
	var ?extensions: Array<String>;

	/** The list of system paths. **/
	var ?path: Array<String>;
}
