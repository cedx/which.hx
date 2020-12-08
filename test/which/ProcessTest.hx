package which;

/** Tests the features of the `Process` class. **/
@:asserts class ProcessTest {

	/** Creates a new test. **/
	public function new() {}

	/** Tests the `gid` property. **/
	public function testGid() {
		Process.gid.handle(outcome -> switch outcome {
			case Success(gid): Finder.isWindows ? asserts.fail("Promise not rejected.") : { asserts.assert(gid >= 0); asserts.done(); }
			case Failure(error): Finder.isWindows ? { asserts.assert(error.code == MethodNotAllowed); asserts.done(); } : asserts.fail(error.message);
		});

		return asserts;
	}

	/** Tests the `uid` property. **/
	public function testUid() {
		Process.gid.handle(outcome -> switch outcome {
			case Success(uid): Finder.isWindows ? asserts.fail("Promise not rejected.") : { asserts.assert(uid >= 0); asserts.done(); }
			case Failure(error): Finder.isWindows ? { asserts.assert(error.code == MethodNotAllowed); asserts.done(); } : asserts.fail(error.message);
		});

		return asserts;
	}
}
