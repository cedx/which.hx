<?php
/**
 * Generated by Haxe 4.1.2
 */

namespace tink\cli;

use \php\_Boot\HxAnon;
use \php\Boot;

class Doc0 {
	/**
	 * @var object
	 */
	static public $doc;

	/**
	 * @return object
	 */
	public static function get () {
		if (Doc0::$doc === null) {
			Doc0::$doc = new HxAnon([
				"doc" => " Find the instances of an executable in the system path. ",
				"commands" => \Array_hx::wrap([new HxAnon([
					"isDefault" => true,
					"isSub" => false,
					"names" => new \Array_hx(),
					"doc" => " <command> : The name of the command to find. ",
				])]),
				"flags" => \Array_hx::wrap([
					new HxAnon([
						"names" => \Array_hx::wrap(["--all"]),
						"aliases" => \Array_hx::wrap(["a"]),
						"doc" => " List all instances of executables found (instead of just the first one). ",
					]),
					new HxAnon([
						"names" => \Array_hx::wrap(["--help"]),
						"aliases" => \Array_hx::wrap(["h"]),
						"doc" => " Output usage information. ",
					]),
					new HxAnon([
						"names" => \Array_hx::wrap(["--silent"]),
						"aliases" => \Array_hx::wrap(["s"]),
						"doc" => " Silence the output, just return the exit code (0 if any executable is found, otherwise 1). ",
					]),
					new HxAnon([
						"names" => \Array_hx::wrap(["--version"]),
						"aliases" => \Array_hx::wrap(["v"]),
						"doc" => " Output the version number. ",
					]),
				]),
			]);
		}
		return Doc0::$doc;
	}
}

Boot::registerClass(Doc0::class, 'tink.cli.Doc0');
