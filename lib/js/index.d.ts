export declare class Finder {
	readonly extensions: string[];
	readonly path: string[];
	constructor(options?: Partial<FinderOptions>);
	find(command: string): Promise<string[]>;
	isExecutable(file: string): Promise<boolean>;
}

export declare class FinderException extends Error {
	readonly command: string;
	readonly finder: Finder;
	constructor(command: string, finder: Finder);
}

export interface FinderOptions {
	extensions: string[];
	path: string[];
}

export declare function which(command: string, options?: Partial<WhichOptions>): Promise<string|string[]>;

export interface WhichOptions extends FinderOptions {
	all: boolean;
	onError: (command: string) => string|string[];
}
