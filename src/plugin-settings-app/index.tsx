// tslint:disable: object-literal-sort-keys
import { HomeScreen, SettingsScreen, SettingsDetailScreen } from './Screens/index';

export default {

	key: 'settings',
	name: 'Settings',

	components: {
		HomeScreen,
	},

	routes: [{
		name: 'Settings',
		path: '',
		exact: true,
		screen: SettingsScreen,
		navigationOptions: {
			title: 'Settings',
		}
	}, {
		name: 'SettingsDetail',
		path: ':id',
		screen: SettingsDetailScreen,
		navigationOptions: {
			title: 'Settings Detail',
		}
	}],

};
