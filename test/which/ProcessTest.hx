package which;

using thenshim.PromiseTools;

/** Tests the features of the `Process` class. **/
class ProcessTest extends Test {

	/** Tests the `gid` property. **/
	function testGid(async: Async) {
		// It should be `-1` on Windows, otherwise greater than or equal to zero.
		Process.gid
			.then(gid -> Assert.isTrue(Sys.systemName() == "Windows" ? gid == -1 : gid >= 0))
			.catchError(e -> Assert.fail(Std.string(e)))
			.finally(() -> async.done());
	}

	/** Tests the `uid` property. **/
	function testUid(async: Async) {
		// It should be `-1` on Windows, otherwise greater than or equal to zero.
		Process.uid
			.then(uid -> Assert.isTrue(Sys.systemName() == "Windows" ? uid == -1 : uid >= 0))
			.catchError(e -> Assert.fail(Std.string(e)))
			.finally(() -> async.done());
	}
}
