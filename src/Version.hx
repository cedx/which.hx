import haxe.Json;
import sys.io.File;

/** Provides information about the program version. **/
class Version {

	/** Reads the package version from the `haxelib.json` file. **/
	public static function getHaxelibVersion(): String
		return try Json.parse(File.getContent("haxelib.json")).version catch (e) "0.0.0";

	/** Gets the package version of this program. **/
	macro public static function getPackageVersion(): ExprOf<String>
		return macro $v{#if display "0.0.0" #else getHaxelibVersion() #end};
}
