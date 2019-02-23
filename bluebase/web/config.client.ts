import deepmerge from 'deepmerge';
// import path from 'path';

export default function (input: any) {

	// console.log(deepmerge(input, {
	// 	includePaths: [
	// 		'../../node_modules/@react-navigation/native'
	// 	]
	// }))

	return deepmerge(input, {
		includePaths: [
			// '/Users/artalat/Coding/bluebase-test-app/node_modules/@react-navigation/core/',
			// '/Users/artalat/Coding/bluebase-test-app/node_modules/@react-navigation/native/',
			// '/Users/artalat/Coding/bluebase-test-app/node_modules/@react-navigation/native/node_modules/react-native-gesture-handler',
			// '/Users/artalat/Coding/bluebase-test-app/node_modules/react-native-safe-area-view/',
		],
		// nodeExternalsFileTypeWhitelist: [
		// 	'/Users/artalat/Coding/bluebase-test-app/node_modules/@react-navigation/native',
		// 	'/Users/artalat/Coding/bluebase-test-app/node_modules/react-native-safe-area-view',
		// 	'/Users/artalat/Coding/bluebase-test-app/node_modules/react-native-gesture-handler',
		// 	'/Users/artalat/Coding/bluebase-test-app/node_modules/react-native-screens'
		// ],
	});
}