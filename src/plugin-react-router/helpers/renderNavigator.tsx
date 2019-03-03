import {
  BlueBase,
  NavigatorProps,
  resolveThunk,
} from '@bluebase/core';
import {
   NavigatorPropsWithResolvedRoutes,
   RouteConfigWithResolveSubRoutes,
} from '../Navigators/types';
import React from 'react';
import { StackNavigator } from '../Navigators/StackNavigator';
import { SwitchNavigator } from '../Navigators/SwitchNavigator';
import { TabNavigator } from '../Navigators/TabNavigator';

export function renderNavigator(navigator: NavigatorProps, BB: BlueBase) {

	const { type, routes } = navigator;

  // If routes is a thunk, resolve it
	const resolvedRoutes = resolveThunk<RouteConfigWithResolveSubRoutes[]>(routes as any, BB);

	let NavigatorComponent: React.ComponentType<NavigatorPropsWithResolvedRoutes>;

	switch (type) {
		case 'switch':
			NavigatorComponent = SwitchNavigator;
			break;

		case 'stack':
			NavigatorComponent = StackNavigator;
			break;

		case 'tab':
			NavigatorComponent = TabNavigator;
			break;

		default:
			NavigatorComponent = SwitchNavigator;
			break;
	}

	if (!NavigatorComponent) {
		return null;
	}

	return (
    <NavigatorComponent {...navigator} routes={resolvedRoutes} />
	);
}