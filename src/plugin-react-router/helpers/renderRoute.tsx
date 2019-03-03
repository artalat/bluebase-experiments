import {
	BlueBase,
	getComponent,
} from '@bluebase/core';
import React from 'react';
import { Route } from '../lib';
import { RouteConfigWithResolveSubRoutes, NavigatorPropsWithResolvedRoutes } from '../Navigators/types';
import { historyToActionObject } from '../helpers/historyToActionObject';
import { renderNavigator } from './renderNavigator';

const Screen = getComponent('Screen');

export const renderRoute = (
	route: RouteConfigWithResolveSubRoutes, 
	parentNavigator: NavigatorPropsWithResolvedRoutes,
	BB: BlueBase
) => {

	const { exact, name, navigationOptions, navigator, path, screen } = route;

	// react-router's route object
	const routeProps: any = {
		exact,
		key: name,
		path,
	};

	// Screen component
	const Component = (typeof screen === 'string') ? getComponent(screen) : screen;

	const screenProps = {
		component: Component,
		navigationOptions,
		navigator: parentNavigator,
	};

	// If we have both, a navigator and a screen, we wrap the navigator inside
	// the screen component
	if (Component && navigator) {
		return (
			<Route {...routeProps}>
			{(routerProps) => (
				<Screen {...screenProps} navigation={historyToActionObject(routerProps, BB)}>
					{renderNavigator(navigator as any, BB)}
				</Screen>
			)}
			</Route>
		);

	}
	// If we have only a navigator, use it
	else if (navigator) {
		return (
			<Route {...routeProps}>
				{renderNavigator(navigator as any, BB)}
			</Route>
		);
	}
	// If we have only a screen, use it
	else if (Component) {
		return (
			<Route {...routeProps}>
			{(routerProps) => (
				<Screen {...screenProps} navigation={historyToActionObject(routerProps, BB)} />
			)}
			</Route>
		);
	}

	return null;
};