// import {
// 	BlueBase,
// 	BlueBaseContext,
// 	Noop,
// 	getComponent,
// } from '@bluebase/core';
// import { NavigatorPropsWithResolvedRoutes, RouteConfigWithResolveSubRoutes } from './types';
// import { Route, Switch } from '../lib/index';
// import { ScreenProps } from '../Screen';
// import { historyToActionObject } from '../helpers/historyToActionObject';
// import { renderNavigator } from '../helpers/renderNavigator';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import React from 'react';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

export class TabNavigator extends React.Component {
	state = {
		index: 0,
		routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
		],
	};

	render() {
		return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
	first: FirstRoute,
	second: SecondRoute,
})}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
		);
	}
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
	},
});


// export interface TabNavigatorProps extends NavigatorPropsWithResolvedRoutes {
// }

// export class TabNavigator extends React.Component<TabNavigatorProps> {

// 	static contextType = BlueBaseContext;

// 	public render() {

// 		const BB: BlueBase = this.context;
// 		const { type, routes, initialRouteName, ...rest } = this.props;

// 		if (routes.length === 0) {
// 			return null;
// 		}

// 		return (
// 			<Switch {...rest}>
// 				{routes.map(route => this.renderRoute(route, BB))}
// 			</Switch>
// 		);
// 	}

// 	private renderRoute(route: RouteConfigWithResolveSubRoutes, BB: BlueBase) {

// 		const parentNavigator = this.props;
// 		const { exact, name, navigationOptions, navigator, path, screen } = route;

// 		// react-router's route object
// 		const routeProps: any = {
// 			exact,
// 			key: name,
// 			path,
// 		};

// 		// Screen component
// 		const Component = screen
// 		? (typeof screen === 'string') ? getComponent(screen) : screen
// 		: Noop;

// 		const screenProps: Partial<ScreenProps> = {
// 			navigationOptions,
// 			navigator: parentNavigator,
// 		};

// 		if (navigator) {
// 			screenProps.children = renderNavigator(navigator as any, BB);
// 		}

// 		return (
// 			<Route {...routeProps}>
// 				{(routerProps) => (
// 					<Component
// 						{...screenProps}
// 						navigation={historyToActionObject(routerProps, BB)}
// 					/>
// 				)}
// 			</Route>
// 		);
// 	}
// }