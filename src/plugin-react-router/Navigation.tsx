import { BlueBaseContext, NavigationProps, NavigatorProps, ThemeContext, joinPaths, resolveThunk, BlueBase } from '@bluebase/core';
import { Navigator } from './Navigator';
import React from 'react';
import { Router } from './lib/index';
// import { joinPaths } from './helpers/joinPaths';

export class Navigation extends React.Component<NavigationProps> {

	static contextType = BlueBaseContext;

	render() {

		const { navigator, ...rest } = this.props;
		const BB: BlueBase = this.context;

		const navigatorObject = processNavigator(navigator);

		BB.Configs.setValue('plugin.react-router.navigation.configs', navigatorObject);

		return <Router {...rest}><Navigator {...processNavigator(navigator)} /></Router>;
	}
}

function processNavigator(navigator: NavigatorProps, parentPath: string = ''): NavigatorProps {

	const routes = resolveThunk(navigator.routes).map(r => {
		const path = `/${joinPaths(parentPath, r.path)}`;
		const resolvedNavigator = r.navigator ? processNavigator(r.navigator, path) : undefined;

		return {
			...r,
			navigator: resolvedNavigator,
			path,
		};
	});

	return {
		...navigator,
		routes,
	};
}
