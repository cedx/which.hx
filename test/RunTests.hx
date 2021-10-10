import instrument.coverage.Coverage;
import tink.testrunner.Runner;
import tink.unit.TestBatch;

/** Runs the test suite. **/
function main() {
	final tests = TestBatch.make([
		new which.FinderTest(),
		new which.ProcessTest(),
		new which.ResultSetTest()
	]);

	Runner.run(tests).handle(outcome -> {
		Coverage.endCoverage();
		Runner.exit(outcome);
	});
}
