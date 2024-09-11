package java.security.auth.module;

import java.lang.Long;

/** Retrieves and makes available Unix UID/GID/groups information for the current user. **/
@:native("com.sun.security.auth.module.UnixSystem")
extern class UnixSystem {

	/** Creates a new Unix module. **/
	function new();

	/** Gets the GID for the current Unix user. **/
	function getGid(): Long;

	/** Gets the UID for the current Unix user. **/
	function getUid(): Long;
}
