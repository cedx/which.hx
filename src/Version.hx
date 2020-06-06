import haxe.Json;
import haxe.macro.Expr.ExprOf;
import sys.io.File;

/** Provides the version number of this package. **/
class Version {

	/** Reads the version number of this package from the `haxelib.json` file. **/
	public static function getHaxelibVersion(): String
		return try Json.parse(File.getContent("haxelib.json")).version catch (e) "0.0.0";

	/** Gets the version number of this package. **/
	macro public static function getPackageVersion(): ExprOf<String>
		return macro $v{#if display "0.0.0" #else getHaxelibVersion() #end};
}
