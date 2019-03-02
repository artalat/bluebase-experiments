import { Navigation } from './Navigation';
import { NavigationActions } from './NavigationActions';
import { Screen } from './Screen';

export default {

	key: 'react-router',
	name: 'React Router',

	defaultConfigs: {
		/**
		 * If enabled, navigation.source value is set with router value
		 * from react-router's context.
		 */
		'plugin.react-router.enableSourceInNavigationActions': false,
	},

	components: {
		Navigation,
		NavigationActions,
		Screen,
	}
};
