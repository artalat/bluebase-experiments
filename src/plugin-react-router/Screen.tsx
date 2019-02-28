import { Header, NavigationActionsObject, NavigationOptions, View } from '@bluebase/core';
import React from 'react';

// const Header = getComponent('Header');

export interface ScreenProps {
	navigationOptions?: NavigationOptions,
	component: React.ComponentType<any>,
	navigation: NavigationActionsObject,
	navigator: 'stack' | 'switch' | string,
	children: React.ReactNode,
}
export const Screen = (props: ScreenProps) => {

	const { component: Component, navigationOptions, navigator, ...rest } = props;

	if (navigator === 'stack') {
		return (
			<View style={{ flex: 1 }}>
				<Header {...navigationOptions} />
				<Component {...rest} />
			</View>
		);
	}

	return (<Component {...rest} />);
};
