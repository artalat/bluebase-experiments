// tslint:disable: object-literal-sort-keys
import { HomeScreen, SettingsScreen } from './Screens/index';

export default {

	key: 'settings',
	name: 'Settings',

	components: {
		HomeScreen,
	},

	route: {
		name: 'Settings',
		path: 'settings',
		screen: SettingsScreen,
		navigationOptions: {
			title: 'Settings',
		}
	},

};
