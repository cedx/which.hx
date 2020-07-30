import instrument.coverage.Coverage;
import utest.UTest;
import which.*;

/** Runs the test suites. **/
class TestAll {

	/** The test cases. **/
	static final tests = [
		new FinderTest(),
		new FinderToolsTest(),
		new ProcessTest()
	];

	/** Application entry point. **/
	static function main() UTest.run(tests, Coverage.endCoverage);
}
