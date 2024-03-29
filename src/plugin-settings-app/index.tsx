// tslint:disable: object-literal-sort-keys
import {
	HomeScreen,
	SettingsDetailScreen,
	SettingsScreen,
} from './Screens/index';
import { Plugin } from '@bluebase/core';
import { Tab1Screen } from './Screens/Tab1';
import { Tab2Screen } from './Screens/Tab2';

const plugin: Partial<Plugin> = {

	key: 'settings',
	name: 'Settings',

	components: {
		HomeScreen,
	},

	routes: [{
		name: 'Settings',
		path: '/',
		exact: true,
		screen: SettingsScreen,
		navigationOptions: {
			title: 'Settings',
		}
	}, {
		name: 'SettingsTabs',
		path: 'tabs',
		// TODO: test initial route here
		navigator: {
			type: 'tab',
			routes: [{
				name: 'Tab1',
				path: 't1',
				exact: true,
				screen: Tab1Screen,
				navigationOptions: {
					title: 'Tab A',
				}
			}, {
				name: 'Tab2',
				path: 't2',
				exact: true,
				screen: Tab2Screen,
				navigationOptions: {
					title: 'Tab B',
				}
			}]
		},
		navigationOptions: {
			title: 'Settings Tabs',
		}
	}, {
		name: 'SettingsBottomTabs',
		path: 'btabs',
		navigator: {
			type: 'bottom-tab',
			routes: [{
				name: 'BTab1',
				path: 'bt1',
				exact: true,
				screen: Tab1Screen,
				navigationOptions: {
					title: 'BTab A',
				}
			}, {
				name: 'BTab2',
				path: 'bt2',
				exact: true,
				screen: Tab2Screen,
				navigationOptions: {
					title: 'BTab B',
				}
			}]
		},
		navigationOptions: {
			title: 'Settings Tabs',
		}
	}, {
		name: 'SettingsDrawer',
		path: 'drawer',

		navigator: {
			type: 'drawer',

			drawerType: 'slide',

			contentOptions: {
				activeTintColor: '#e91e63',
				itemsContainerStyle: {
					marginVertical: 0,
				},
				iconContainerStyle: {
					opacity: 1
				}
			},

			routes: [{
				name: 'DTab1',
				path: 'dt1',
				exact: true,
				screen: Tab1Screen,
				navigationOptions: {
					title: 'DTab A',
					// drawerLockMode: 'locked-open',
				}
			}, {
				name: 'DTab2',
				path: 'Dt2',
				exact: true,
				screen: Tab2Screen,
				navigationOptions: {
					title: 'DTab B',
				}
			}]
		},
		navigationOptions: {
			title: 'Settings Tabs',
		}
	}, {
		name: 'SettingsDetail',
		path: '/:id',
		screen: SettingsDetailScreen,
		navigationOptions: {
			title: 'Settings Detail',
		}
	}],
};


export default {
	...plugin
};
