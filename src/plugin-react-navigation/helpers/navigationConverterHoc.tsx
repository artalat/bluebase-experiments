import React from 'react';
import { navigationToActionObject } from './navigationToActionObject';

export const navigationConverterHoc = (Component: React.ComponentType<any>) => (props: any) => {

	const { navigation: nav, ...screenProps } = props;

	const navigation = props.navigation ? navigationToActionObject(props.navigation) : undefined;

	return React.createElement(Component, { screenProps: screenProps || {}, navigation });
};