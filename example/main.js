import {which} from "@cedx/which.hx";

/**
 * Finds the first instance of an executable.
 * @return {Promise<void>} Completes when the program is terminated.
 */
async function main() {
	try {
		const path = await which("foobar").first();
		console.log(`The "foobar" command is located at: ${path}`);
	}

	catch (error) {
		console.log(error.message);
	}
}
