package which;

import haxe.io.Path;
import sys.FileSystem;

using Lambda;

#if nodejs
import js.lib.Object;
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

	/** The character used to separate paths in the system path. **/
	public final pathSeparator: String;

	/** Creates a new finder. **/
	public function new(?options: #if php NativeStructArray<FinderOptions> #else FinderOptions #end) {
		pathSeparator = isWindows ? ";" : ":";
		extensions = isWindows ? Sys.getEnv("PATHEXT").split(pathSeparator) : [];
		path = Sys.getEnv("PATH").split(pathSeparator);

		if (options != null) {
			#if php
			if (isset(options["extensions"])) extensions = options["extensions"];
			if (isset(options["path"])) path = options["path"];
			if (isset(options["pathSeparator"])) pathSeparator = options["pathSeparator"];
			#else
			if (options.extensions != null) extensions = options.extensions;
			if (options.path != null) path = options.path;
			if (options.pathSeparator != null) pathSeparator = options.pathSeparator;
			#end
		}
	}

	/** Gets a value indicating whether the current platform is Windows. **/
	static function get_isWindows(): Bool {
		if (Sys.systemName() == "Windows") return true;
		final osType = Sys.getEnv("OSTYPE");
		return osType == "cygwin" || osType == "msys";
	}

	/** Gets a value indicating whether the specified `file` is executable. **/
	public function isExecutable(file: String): Bool {
		if (!FileSystem.exists(file) || FileSystem.isDirectory(file)) return false;
		return isWindows ? checkFileExtension(file) : checkFilePermissions(file);
		// TODO: promise on Node.js
	}

	/** Checks that the specified `file` is executable according to the executable file extensions. **/
	function checkFileExtension(file: String): Bool {
		final extension = Path.extension(file);
		return extension.length > 0 ? extensions.contains('.$extension') : false;
	}

	/** Checks that the specified `file` is executable according to its permissions. **/
	function checkFilePermissions(file: String): Bool {
		final stats = FileSystem.stat(file);

		// TODO PHP and Node.js support getuid/getgid functions on non-Windows OSes !!!

		// Others.
		if (stats.mode & 1 != 0) return true;

		// Group.
		//final gid = typeof process.getgid == "function" ? process.getgid() : -1;
		final gid = -1; //#if php posix_getgid() #else -1 #end;
		if (stats.mode & 8 != 0) return gid == stats.gid;

		// Owner.
		//final uid = typeof process.getuid == "function" ? process.getuid() : -1;
		final uid = -1;
		if (stats.mode & 64 != 0) return uid == stats.uid;

		// Root.
		return stats.mode & (64 | 8) != 0 ? uid == 0 : false;
	}

	/** Finds the instances of an executable `command` in the specified `directory`. **/
	function findExecutables(directory: String, command: String): Iterable<String> {
		//final basePath = Sys.getCwd();
		/*
		for (extension in [""].concat(this.extensions)) {
			@yield return "TODO";
		}*/
		return null;
	}

	/** Gets a numeric `identity` of the current process. **/
	function getProcessId(identity: String) {
		if (isWindows) return -1;
		return -1;
	}

	#if js
	/** Initializes the class. **/
	static function __init__(): Void {
		// TODO Object.defineProperty(Finder, "isWindows", {get: Finder.get_isWindows});
	}
	#end
}

/** Defines the options of a `Finder` instance. **/
typedef FinderOptions = {

	/** The list of executable file extensions. **/
	var ?extensions: Array<String>;

	/** The list of system paths. **/
	var ?path: Array<String>;

	/** The character used to separate paths in the system path. **/
	var ?pathSeparator: String;
}
