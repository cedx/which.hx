/** Defines the shape of a JSON value. */
export declare type Json = null | boolean | number | string | Json[] | {
	[property: string]: Json;
};
