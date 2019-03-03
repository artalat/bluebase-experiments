import {
	BlueBase,
	getComponent,
} from '@bluebase/core';
import {
	NavigatorPropsWithResolvedRoutes,
	RouteConfigWithResolveSubRoutes
} from '../Navigators/types';
import React from 'react';
import { Route } from '../lib';
import { ScreenProps } from '../Screen';
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

	const screenProps: Partial<ScreenProps> = {
		component: Component,
		navigationOptions,
		navigator: parentNavigator,
	};

	if (navigator) {
		screenProps.children = renderNavigator(navigator as any, BB);
	}

	return (
		<Route {...routeProps}>
		{(routerProps) => (
			<Screen {...screenProps} navigation={historyToActionObject(routerProps, BB)} />
		)}
		</Route>
	);
};