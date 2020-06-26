import {which} from "@cedx/which.hx";

/**
 * Finds the first instance of an executable.
 * @return {Promise<void>} Completes when the program is terminated.
 */
async function main() {
	try {
		const path = await which("foobar");
		console.log(`The command 'foobar' is located at: ${path}`);
	}

	catch (error) {
		// `error` is an instance of `FinderException`.
		console.log(`The command '${error.command}' was not found`);
	}
}
