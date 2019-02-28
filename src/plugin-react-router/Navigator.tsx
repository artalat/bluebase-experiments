// tslint:disable: jsx-alignment
// tslint:disable: jsx-no-lambda
import { NavigatorProps, RouteConfig, getComponent, resolveThunk, BlueBaseConsumer, BlueBase } from '@bluebase/core';
import { Route, Stack, Switch } from './lib';
import React from 'react';
import { historyToActionObject } from './helpers/historyToActionObject';

const Screen = getComponent('Screen');

const renderRoute = (navigatorType: string, BB: BlueBase) => (element: RouteConfig) => {

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
			<Route {...route} children={(routerProps) => (
				<Screen {...screenProps} navigation={historyToActionObject(routerProps, BB)}>
					<Navigator {...element.navigator} />
				</Screen>
			)} />
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
			<Route {...route} children={(routerProps) => (
				<Screen {...screenProps} navigation={historyToActionObject(routerProps, BB)} />
			)} />
		);
	}

	return null;
};

export const Navigator = (props: NavigatorProps) => {

	const { type, routes, ...rest } = props;

	// If routes is a thunk, resolve it
	const resolvedRoutes: RouteConfig[] = (typeof routes === 'function') ? routes() : routes;

	// Get appropriate navigator creator function
	const NavigatorComponent = (type === 'stack') ? Stack : Switch;

	return (
		<BlueBaseConsumer children={(BB: BlueBase) => (
			<NavigatorComponent {...rest}>
				{resolvedRoutes.map(renderRoute(type, BB))}
			</NavigatorComponent>
		)} />
	);
};
