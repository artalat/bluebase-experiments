import { HomeScreen, NotFoundScreen, SettingsScreen } from './Screens';
import { createContainer, createStackNavigator } from '../react-navigation/lib/index';

// tslint:disable: object-literal-sort-keys
const AppNavigator = createStackNavigator({
	Home: {
		navigationOptions: {
			title: 'Hello BlueBase!'
		},
		path: '',
		screen: HomeScreen,
	},
	Settings: {
		navigationOptions: {
			title: 'Settings',
		},
		path: 'settings',
		screen: SettingsScreen,
	},
	NotFound: {
		navigationOptions: {
			title: 'Not Found'
		},
		path: '404',
		screen: NotFoundScreen,
	}
});

export default createContainer(AppNavigator);