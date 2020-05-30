import mcover.coverage.MCoverage;
import mcover.coverage.client.LcovPrintClient;
import tink.testrunner.Runner;
import tink.unit.TestBatch;
import which.*;

/** Runs the test suites. **/
class RunTests {

	/** Application entry point. **/
	static function main(): Void {
		final tests = TestBatch.make([new FinderTest()]);
		Runner.run(tests).handle(result -> {
			final logger = MCoverage.getLogger();
			logger.addClient(new LcovPrintClient("which", "var/lcov.info"));
			logger.report();
			Runner.exit(result);
		});
	}
}
