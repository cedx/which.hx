import assert from "assert/strict";
import path from "path";
import {FinderException, which} from "../../lib/js/index.mjs";

/**
 * Tests the JavaScript adapter.
 * @return {Promise<void>} Completes when the program is terminated.
 */
async function main() {
	// It should throw an exception if the command is not found.
	try {
		await which("foobar").first();
		assert("Exception not thrown.");
	}

	catch (e) {
		assert(e instanceof FinderException);
	}

	// It should return the absolute executable if the command is found.
	const suffix = `${path.sep}${process.platform == "win32" ? "node.exe" : "node"}`;

	const executables = await which("node").all();
	assert(executables.length >= 1);
	assert(executables[0].endsWith(suffix));

	const executable = await which("node").first();
	assert(executable.endsWith(suffix));
}

// Run the test.
main().catch(console.error);
