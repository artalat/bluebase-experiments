const deepmerge = require('deepmerge');

/**
 * Add any modifications to the platform specific configs here.
 */
export default (input: any) => {
	return deepmerge(input, {
		disableSSR: false,
	});
};
