package java.security.auth.module;

import haxe.Int64;

/** Retrieves and makes available Unix UID/GID/groups information for the current user. **/
@:native("com.sun.security.auth.module.UnixSystem")
extern class UnixSystem {

	/** Creates a new Unix module. **/
	function new();

	/** Gets the GID for the current Unix user. **/
	function getGid(): Int64;

	/** Gets the UID for the current Unix user. **/
	function getUid(): Int64;
}
