// const deepmerge = require('deepmerge');

/**
 * Add any modifications to the platform specific configs here.
 */
export default (input: any) => {
	// const configs = deepmerge(input, {
	// 	// resolve: {
	// 	// 	alias: {
	// 	// 		'react-native-screens': '/Users/artalat/Coding/bluebase-test-app/node_modules/react-native-screens'
	// 	// 	}
	// 	// },
	// });

	// input.resolve.alias['react-native-screens'] = '/Users/artalat/Coding/bluebase-test-app/node_modules/react-native-screens';
	// console.log('configs', configs);
	return input;
};
