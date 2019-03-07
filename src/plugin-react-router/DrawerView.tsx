import {
	MaybeThunk,
	NavigationActionsObject,
	NavigationOptions,
	Text,
	Theme,
	View,
	getComponent,
	resolveThunk,
} from '@bluebase/core';
import { StyleProp, ViewStyle } from 'react-native';
import { NavigatorPropsWithResolvedRoutes } from './Navigators/types';
import React from 'react';

export interface ScreenStyles {
	root: StyleProp<ViewStyle>
}

export interface DrawerViewProps {
	navigationOptions?: MaybeThunk<NavigationOptions>,
	component?: React.ComponentType<any>,
	navigation: NavigationActionsObject,
	navigator: NavigatorPropsWithResolvedRoutes,
	children: React.ReactNode,
	styles?: ScreenStyles
}

const DrawerLayout = getComponent('DrawerLayout');

const DrawerNavigationView = () => (
	<View style={{ flex: 1 }}><Text>Foo bar</Text></View>
);

export const DrawerView = (props: DrawerViewProps) => {

	const { component, navigationOptions, navigator, styles, ...rest } = props;
	const { contentOptions, routes, type, ...other } = navigator;

	const stylesheet = styles as ScreenStyles;

	const Component = component; //|| DrawerViewContent;

	// // Resolve active tab index
	// const currentRouteName = props.navigation.state.routeName;
	// const currentIndex = navigator.routes.findIndex(route => route.name === currentRouteName);

	// // Navigation State
	// const navigationState = {
	// 	index: currentIndex,
	// 	routes: navigator.routes.map((route, index) => {

	// 		// Resolve navigationOptions
	// 		const options = resolveThunk(
	// 			route.navigationOptions || {},
	// 			{
	// 				navigation: props.navigation,
	// 				screenProps: rest
	// 			}
	// 		);

	// 		return {
	// 			index,
	// 			routeName: route.name,
	// 			title: options.title,
	// 		};
	// 	})
	// };

	// return (
	// 	<View style={stylesheet.root}>
	// 		<TabBar navigationState={navigationState} />
	// 		<Component {...rest} />
	// 	</View>
	// );

	return (
	 		<View style={stylesheet.root}>
				<DrawerLayout {...other} renderNavigationView={DrawerNavigationView}>
					<Component {...rest} />
				</DrawerLayout>
			</View>
	);
};

DrawerView.defaultStyles = (theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		flex: 1,
	}
});
