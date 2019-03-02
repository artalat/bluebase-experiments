import {
	Header,
	NavigationActionsObject,
	NavigationOptions,
	Theme,
	View,
} from '@bluebase/core';
import { StyleProp, ViewStyle } from 'react-native';
import React from 'react';

export interface ScreenStyles {
	root: StyleProp<ViewStyle>
}

export interface ScreenProps {
	navigationOptions?: NavigationOptions,
	component: React.ComponentType<any>,
	navigation: NavigationActionsObject,
	navigator: 'stack' | 'switch' | string,
	children: React.ReactNode,
	styles?: ScreenStyles
}
export const Screen = (props: ScreenProps) => {

	const { component: Component, navigationOptions, navigator, styles, ...rest } = props;
	const stylesheet = styles as ScreenStyles;

	if (navigator === 'stack') {
		return (
			<View style={stylesheet.root}>
				<Header {...navigationOptions} />
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
