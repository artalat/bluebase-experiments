import {
	BlueBase,
	BlueBaseContext,
	NavigationProps,
} from '@bluebase/core';
import { Navigator } from './Navigator';
import React from 'react';
import { Router } from './lib/index';
import { processNavigator } from './helpers/processNavigator';

export class Navigation extends React.Component<NavigationProps> {

	static contextType = BlueBaseContext;

	render() {

		const { navigator, ...rest } = this.props;
		const BB: BlueBase = this.context;

		const navigatorObject = processNavigator(navigator);

		BB.Configs.setValue('plugin.react-router.navigationConfigs', navigatorObject);

		return <Router {...rest}><Navigator {...processNavigator(navigator)} /></Router>;
	}
}