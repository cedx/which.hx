package which;

/** Tests the features of the `Process` class. **/
@:asserts class ProcessTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `gid` property. **/
	public function testGid() {
		Process.gid.next(gid -> asserts.assert(Finder.isWindows ? gid == -1 : gid >= 0)).handle(asserts.handle);
		return asserts;
	}

	/** Tests the `uid` property. **/
	public function testUid() {
		Process.uid.next(uid -> asserts.assert(Finder.isWindows ? uid == -1 : uid >= 0)).handle(asserts.handle);
		return asserts;
	}
}
