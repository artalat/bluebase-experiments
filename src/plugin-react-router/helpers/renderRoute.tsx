import {
	BlueBase,
	NavigatorProps,
	RouteConfig,
	getComponent,
	resolveThunk,
} from '@bluebase/core';
import React from 'react';
import { Route } from '../lib';
import { historyToActionObject } from '../helpers/historyToActionObject';

const Screen = getComponent('Screen');

export const renderRoute = (
	navigatorType: string,
	Navigator: React.ComponentType<NavigatorProps>,
	BB: BlueBase
) => (element: RouteConfig) => {

	const navigationOptions = resolveThunk(element.navigationOptions || {});

	// react-navigation's route object
	const route: any = {
		exact: element.exact,
		// navigationOptions: element.navigationOptions,
		key: element.name,
		path: element.path,

		// headerComponent: () => React.createElement(Header, navigationOptions),
	};

	// Screen component
	const Component = (typeof element.screen === 'string') ? getComponent(element.screen) : element.screen;

	const screenProps = {
		component: Component,
		navigationOptions,
		navigator: navigatorType,
	};


	// If we have both, a navigator and a screen, we wrap the navigator inside
	// the screen component
	if (Component && element.navigator) {
		return (
			<Route {...route}>
			{(routerProps) => (
				<Screen {...screenProps} navigation={historyToActionObject(routerProps, BB)}>
					<Navigator {...element.navigator} />
				</Screen>
			)}
			</Route>
		);

	}
	// If we have only a navigator, use it
	else if (element.navigator) {
		return (
			<Route {...route}>
				<Navigator {...element.navigator} />
			</Route>
		);
	}
	// If we have only a screen, use it
	else if (Component) {
		return (
			<Route {...route}>
			{(routerProps) => (
				<Screen {...screenProps} navigation={historyToActionObject(routerProps, BB)} />
			)}
			</Route>
		);
	}

	return null;
};