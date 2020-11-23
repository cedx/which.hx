package which;

using thenshim.PromiseTools;

/** Tests the features of the `Process` class. **/
@:asserts class ProcessTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `gid` property. **/
	public function testGid() {
		// It should be `-1` on Windows, otherwise greater than or equal to zero.
		Process.gid
			.then(gid -> asserts.assert(Finder.isWindows ? gid == -1 : gid >= 0), e -> {
				asserts.fail(Std.string(e));
				null;
			})
			.finally(() -> asserts.done());

		return asserts;
	}

	/** Tests the `uid` property. **/
	public function testUid() {
		// It should be `-1` on Windows, otherwise greater than or equal to zero.
		Process.uid
			.then(uid -> asserts.assert(Finder.isWindows ? uid == -1 : uid >= 0), e -> {
				asserts.fail(Std.string(e));
				null;
			})
			.finally(() -> asserts.done());

		return asserts;
	}
}
