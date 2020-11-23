import instrument.coverage.Coverage;
import tink.testrunner.Runner;
import tink.unit.TestBatch;
import which.*;

/** Runs the test suites. **/
class TestAll {

	/** Application entry point. **/
	static function main() {
		final tests = TestBatch.make([
			new FinderTest(),
			new FinderToolsTest(),
			new ProcessTest()
		]);

		Runner.run(tests).handle(outcome -> {
			Coverage.endCoverage();
			Runner.exit(outcome);
		});
	}
}
