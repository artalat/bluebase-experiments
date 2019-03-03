import {
	Header,
	NavigationActionsObject,
	NavigationOptions,
	Theme,
	View,
	resolveThunk,
} from '@bluebase/core';
import { StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { NavigatorPropsWithResolvedRoutes } from './Navigators/types';

export interface ScreenStyles {
	root: StyleProp<ViewStyle>
}

export interface ScreenProps {
	navigationOptions?: NavigationOptions,
	component: React.ComponentType<any>,
	navigation: NavigationActionsObject,
	navigator: NavigatorPropsWithResolvedRoutes,
	children: React.ReactNode,
	styles?: ScreenStyles
}
export const Screen = (props: ScreenProps) => {

	const { component: Component, navigationOptions, navigator, styles, ...rest } = props;
	const stylesheet = styles as ScreenStyles;

	const finalNavigationOptions = resolveThunk(
		navigationOptions || {},
		{
			navigation: props.navigation,
			screenProps: rest
		}
	);

	if (navigator.type === 'stack') {
		return (
			<View style={stylesheet.root}>
				<Header {...finalNavigationOptions} />
				<Component {...rest} />
			</View>
		);
	}

	return (<Component {...rest} />);
};

Screen.defaultStyles = (theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		flex: 1,
	}
});
