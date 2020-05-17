#!/usr/bin/env node
import {FinderException, Program} from "../lib/index.mjs";

// Start the application.
Program.main().catch(err => {
	if (err instanceof FinderException) process.exitCode = 1;
	else {
		console.error(err.message);
		process.exitCode = 2;
	}
});
