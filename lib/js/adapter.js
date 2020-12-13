"use strict";
const {FinderException, FinderTools} = require("./bundle.js").which;

/**
 * Finds the instances of the specified `command` in the system path.
 * @param {string} command The command to be resolved.
 * @param {object} options Options used to customize the function behavior.
 * @return {_FinderStream} An object providing the stream of search results.
 */
exports.which = function which(command, options = {}) {
	return new _FinderStream(FinderTools.which(command, options));
};

/** Provides convenient access to the stream of search results. */
class _FinderStream {

	/**
	 * The object providing the stream of search results.
	 * @type {FinderStream}
	 */
	#stream;

	/**
	 * Creates a new finder stream.
	 * @param {FinderStream} stream The object providing the stream of search results.
	 */
	constructor(stream) {
		this.#stream = stream;
	}

	/**
	 * Returns all instances of the searched command.
	 * @return {Promise<string[]>} All instances of the searched command.
	 */
	all() {
		return new Promise((resolve, reject) => this.#stream.all().handle(outcome => {
			if (outcome.toString().startsWith("Success")) resolve(outcome.data);
			else reject(new FinderException(this.#stream.command, this.#stream.finder));
		}));
	}

	/**
	 * Returns the first instance of the searched command.
	 * @return {Promise<string>} The first instance of the searched command.
	 */
	first() {
		return new Promise((resolve, reject) => this.#stream.first().handle(outcome => {
			if (outcome.toString().startsWith("Success")) resolve(outcome.data);
			else reject(new FinderException(this.#stream.command, this.#stream.finder));
		}));
	}
}
