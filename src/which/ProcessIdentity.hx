package which;

/** Defines the identity type of a process. **/
enum abstract ProcessIdentity(String) {

	/** The process group. **/
	var Group = "g";

	/** The process user. **/
	var User = "u";
}
