package which;

using AssertionTools;

/** Tests the features of the `Process` class. **/
@:asserts class ProcessTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `gid` property. **/
	public function testGid() {
		final promise = Process.gid;
		if (Finder.isWindows) asserts.rejects(promise, MethodNotAllowed).handle(asserts.handle);
		else promise.next(gid -> gid >= 0).handle(asserts.handle);
		return asserts;
	}

	/** Tests the `uid` property. **/
	public function testUid() {
		final promise = Process.uid;
		if (Finder.isWindows) asserts.rejects(promise, MethodNotAllowed).handle(asserts.handle);
		else promise.next(uid -> uid >= 0).handle(asserts.handle);
		return asserts;
	}
}
