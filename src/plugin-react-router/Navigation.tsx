import { NavigationProps, ThemeContext } from '@bluebase/core';
import { Navigator } from './Navigator';
import React from 'react';
import { Router } from './lib/index';
import { joinPaths } from './helpers/joinPaths';
import { NavigatorProps } from '@bluebase/core/dist/components';
import { resolveThunk } from '@bluebase/core/dist/utils';

export class Navigation extends React.Component<NavigationProps> {

	static contextType = ThemeContext;

	render() {

		const { navigator, ...rest } = this.props;
		// const { theme }: ThemeContextData = this.context;

		console.log('navigator', processNavigator(navigator));
		return <Router {...rest}><Navigator {...processNavigator(navigator)} /></Router>;
	}
}

function processNavigator(navigator: NavigatorProps, parentPath: string = ''): NavigatorProps {

	const routes = resolveThunk(navigator.routes).map(r => {
		const path = joinPaths(parentPath, r.path);
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