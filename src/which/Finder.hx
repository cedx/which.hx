package which;

import asys.FileSystem;
import asys.FileStat;
import tink.streams.RealStream;
import tink.streams.Stream.Empty;
using StringTools;
using haxe.io.Path;

#if java
import java.NativeArray;
import java.nio.file.Files;
import java.nio.file.Paths;
#end

/** Finds the instances of an executable in the system path. **/
final class Finder {

	/** Value indicating whether the current platform is Windows. **/
	public static var isWindows(get, never): Bool;
		static function get_isWindows() return Sys.systemName() == "Windows" || {
			final osType = Sys.getEnv("OSTYPE");
			["cygwin", "msys"].contains(osType);
		};

	/** The list of executable file extensions. **/
	public final extensions: Array<String>;

	/** The list of system paths. **/
	public final paths: Array<String>;

	/** Creates a new finder. **/
	public function new(?options: FinderOptions) {
		final separator = isWindows ? ";" : ":";

		final pathExt = Sys.getEnv("PATHEXT");
		extensions = pathExt != null ? pathExt.split(";").map(item -> item.toLowerCase()) : [".exe", ".cmd", ".bat", ".com"];

		final pathEnv = Sys.getEnv("PATH");
		paths = pathEnv != null ? pathEnv.split(separator) : [];

		if (options != null) {
			if (options.extensions != null) extensions = options.extensions.map(item -> item.toLowerCase());
			if (options.paths != null) paths = options.paths;
		}
	}

	/** Finds the instances of the specified `command` in the system path. **/
	public function find(command: String) {
		var stream: RealStream<String> = Empty.make();
		for (item in (isWindows ? [Sys.getCwd()] : []).concat(paths)) stream = stream.append(findExecutables(item, command));
		return stream;
	}

	/** Gets a value indicating whether the specified `file` is executable. **/
	public function isExecutable(file: String) return FileSystem.exists(file)
		.next(exists -> exists ? FileSystem.isDirectory(file) : new Error(NotFound, file))
		.next(isDirectory -> isDirectory ? new Error(UnprocessableEntity, file) : file)
		.next(path -> isWindows ? checkFileExtension(path) : #if java stat(path) #else FileSystem.stat(path) #end.next(checkFilePermissions));

	/** Checks that the specified `file` is executable according to the executable file extensions. **/
	function checkFileExtension(file: String)
		return Promise.resolve(extensions.contains('.${file.extension().toLowerCase()}'));

	/** Checks that the file represented by the specified `stats` is executable according to its permissions. **/
	function checkFilePermissions(stat: FileStat) {
		var processUid = -1;
		return Future.sync(stat.mode & 1 != 0)
			.next(isExec -> isExec || (stat.mode & 8 == 0) ? isExec : Process.gid.next(gid -> stat.gid == gid))
			.next(isExec -> isExec || (stat.mode & 64 == 0) ? isExec : Process.uid.next(uid -> stat.uid == (processUid = uid)))
			.next(isExec -> isExec || (stat.mode & (64 | 8) == 0) ? isExec : processUid == 0);
	}

	/** Finds the instances of the specified `command` in the given `directory`. **/
	function findExecutables(directory: String, command: String) {
		final basePath = FileSystem.absolutePath(directory);
		final stream: RealStream<String> = [""]
			.concat(isWindows ? extensions : [])
			.map(extension -> Path.join([basePath, '$command$extension']).replace("/", isWindows ? "\\" : "/"))
			.iterator();

		return stream.filter(item -> isExecutable(item).tryRecover(_ -> false));
	}

	#if java
	/** Returns `FileStat` information for the specified `file`. **/
	static function stat(file: String): Promise<FileStat> {
		final attributes = Files.readAttributes(Paths.get(file, NativeArray.make()), "unix:gid,mode,uid", NativeArray.make());
		return Promise.resolve(cast {gid: attributes.get("gid"), mode: attributes.get("mode"), uid: attributes.get("uid")});
	}
	#end
}

/** Defines the options of a `Finder` instance. **/
typedef FinderOptions = {

	/** The list of executable file extensions. **/
	var ?extensions: Array<String>;

	/** The list of system paths. **/
	var ?paths: Array<String>;
}
