import haxe.Json;
import haxe.macro.Context;
import sys.io.File;

/** Provides information about the program version. **/
class Version {

	/** Gets the version of the Haxe compiler. **/
	macro public static function getHaxeVersion(): ExprOf<String>
		return macro $v{Context.definedValue("haxe")};

	/** Gets the package version of this program. **/
	macro public static function getPackageVersion(): ExprOf<String>
		return macro $v{#if display "0.0.0" #else getHaxelibFileVersion() #end};

	/** Reads the package version from the `haxelib.json` file. **/
	static function getHaxelibFileVersion(): String
		return try Json.parse(File.getContent("haxelib.json")).version catch (e) "0.0.0";
}
