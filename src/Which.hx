import which.Finder;
import which.ResultSet;

/** Finds the instances of the specified `command` in the system path. **/
inline function which(command: String, ?options: FinderOptions)
	return new ResultSet(command, new Finder(options));
