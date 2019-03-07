import { DrawerView } from './DrawerView';
import { Navigation } from './Navigation';
import { NavigationActions } from './NavigationActions';
import { Screen } from './Screen';
import { TabView } from './TabView';

export default {

	key: 'react-router',
	name: 'React Router',

	defaultConfigs: {
		/**
		 * If enabled, navigation.source value is set with router value
		 * from react-router's context.
		 */
		'plugin.react-router.enableSourceInNavigationActions': true,
	},

	components: {
		DrawerView,
		Navigation,
		NavigationActions,
		Screen,
		TabView,
	}
};
