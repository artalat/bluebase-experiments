// tslint:disable: jsx-alignment
// tslint:disable: jsx-no-lambda
import { NavigatorProps, RouteConfig, getComponent } from '@bluebase/core';
import { Route, Stack, Switch } from './lib';
import React from 'react';
import { historyToActionObject } from './helpers/historyToActionObject';
// import { Header } from '@react-navigation/native';
// import { Text } from 'react-native';


// const Header = () => <Text>Foo</Text>;
const renderRoute = (element: RouteConfig) => {

	// react-navigation's route object
	const route: any = {
		exact: element.exact,
		// navigationOptions: element.navigationOptions,
		key: element.name,
		path: element.path,

		headerComponent: Header,
	};

	// Screen component
	const Component = (typeof element.screen === 'string') ? getComponent(element.screen) : element.screen;

	// If we have both, a navigator and a screen, we wrap the navigator inside
	// the screen component
	if (Component && element.navigator) {
		return (
			<Route {...route} children={(routerProps) => (
				<Component navigation={historyToActionObject(routerProps)}>
					<Navigator {...element.navigator} />
				</Component>
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
				<Component navigation={historyToActionObject(routerProps)} />
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
		<NavigatorComponent {...rest}>
			{resolvedRoutes.map(renderRoute)}
		</NavigatorComponent>
	);
};
