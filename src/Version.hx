import haxe.Json;
import sys.io.File;

#if macro
import haxe.macro.Expr.ExprOf;
#end

/** Provides the version number of this package. **/
class Version {

	/** Reads the version number of this package from the `haxelib.json` file. **/
	public static function getHaxelibVersion(): String
		return try Json.parse(File.getContent("haxelib.json")).version catch (e) "dev";

	/** Gets the version number of this package. **/
	macro public static function getPackageVersion(): ExprOf<String> {
		final version = #if display "dev" #else getHaxelibVersion() #end;
		return macro $v{version};
	}
}