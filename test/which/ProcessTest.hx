package which;

using AssertionTools;

/** Tests the features of the `Process` class. **/
@:asserts final class ProcessTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `gid` property. **/
	public function testGid() {
		final gid = Process.gid;
		final promise = Finder.isWindows ? asserts.rejects(MethodNotAllowed, gid) : gid.next(value -> asserts.assert(value >= 0)).noise();
		promise.handle(asserts.handle);
		return asserts;
	}

	/** Tests the `uid` property. **/
	public function testUid() {
		final uid = Process.uid;
		final promise = Finder.isWindows ? asserts.rejects(MethodNotAllowed, uid) : uid.next(value -> asserts.assert(value >= 0)).noise();
		promise.handle(asserts.handle);
		return asserts;
	}
}
