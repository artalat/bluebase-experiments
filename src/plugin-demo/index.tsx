// tslint:disable: object-literal-sort-keys
// import App from './App';
// import { SceneHeader } from '../react-navigation/SceneHeader';
import { Text,  } from 'react-native';
import { NavigatorProps } from '@bluebase/core';
import React from 'react';
import { SettingsScreen, HomeScreen } from './Screens/index';
import { LoginScreen } from './Screens/Login';
import { DeepScreen } from './Screens/Deep';
import { View } from './components/View';
import { View2 } from './components/View2';
// import deepmerge from 'deepmerge';

export default {

	key: 'router-test-plugin',
	name: 'Router Test Plugin',

	components: {
		HomeScreen,
	},

	route: {
		name: 'Settings',
		path: 'settings',
		screen: SettingsScreen,
		navigationOptions: {
			title: 'Settings 123',
		}
	},

	// hooks: {
	// 	'bluebase.navigator.root': (_inputRoutes: NavigatorProps) => {

	// 		const rootRoutes: NavigatorProps = {
	// 			type: 'stack',
	// 			initialRouteName: 'Root',
	// 			// headerMode: 'none',

	// 			routes: [{
	// 				name: 'Root',
	// 				path: '',
	// 				// screen: 'SystemApp',

	// 				// screen: (props: any) => (
	// 				// 	<View2 style={{ flex: 1 }}>{props.children}</View2>
	// 				// 	// <View style={{ flex: 1 }}>
	// 				// 	// 	<Text>System 1</Text>
	// 				// 	// 	<View style={{ flex: 1 }}><Text>System 2</Text>{props.children}</View>
	// 				// 	// 	<Text>System 3</Text>
	// 				// 	// </View>
	// 				// ),
	// 				navigationOptions: {
	// 					header: null
	// 				},

	// 				// FIXME: Experimental
	// 				navigator: {
	// 					type: 'stack',
	// 					initialRouteName: 'Home',
	// 					routes: [{
	// 						name: 'Home',
	// 						path: 'home',
	// 						screen: HomeScreen,
	// 						navigationOptions: {
	// 							title: 'Home'
	// 						}
	// 					}, {
	// 						name: 'Settings',
	// 						path: 'settings',
	// 						screen: SettingsScreen,
	// 						navigationOptions: {
	// 							title: 'Settings'
	// 						}
	// 					}, {
	// 						name: 'Another',

	// 						// navigationOptions: {
	// 						// 	header: null
	// 						// },
	// 						navigator: {
	// 							type: 'stack',
	// 							// initialRouteName: 'Deep',
	// 							routes: [{
	// 								name: 'Deep',
	// 								path: 'deep',
	// 								screen: DeepScreen,
	// 								navigationOptions: {
	// 									title: 'Im in Deep'
	// 								}
	// 							}]
	// 						}
	// 					}]
	// 				}
	// 			}, {
	// 				name: 'Login',
	// 				path: 'login',
	// 				screen: LoginScreen,
	// 				navigationOptions: {
	// 					title: 'Login'
	// 				}
	// 			}]
	// 		};

	// 		return rootRoutes;
	// 		// return deepmerge(inputRoutes, rootRoutes);
	// 	}
	// }


};
