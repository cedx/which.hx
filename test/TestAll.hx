import mcover.coverage.MCoverage;
import mcover.coverage.client.LcovPrintClient;
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
	static function main() UTest.run(tests, () -> {
		final logger = MCoverage.getLogger();
		logger.addClient(new LcovPrintClient("which", "var/lcov.info"));
		logger.report();
	});
}
