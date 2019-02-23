// import ReactNavigationPlugin from '../../src/react-navigation';
import CoreExtras from '../../src/core';
import ReactRouterPlugin from '../../src/plugin-react-router';
import SettingsApp from '../../src/plugin-settings-app';

// This file contain all the apps, plugins and configuration which are required
// for booting bluebase. see https://blueeast.gitbooks.io/bluebase/
export default {

	plugins: {
		'core': CoreExtras,
		// 'react-navigation': ReactNavigationPlugin,
		'react-router': ReactRouterPlugin,
		'settings': SettingsApp,
	}
};
