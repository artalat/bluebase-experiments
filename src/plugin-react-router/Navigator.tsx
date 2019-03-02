import {
	BlueBase,
	BlueBaseConsumer,
	NavigatorProps,
	RouteConfig,
} from '@bluebase/core';
import { Stack, Switch } from './lib';
import React from 'react';
import { renderRoute } from './helpers/renderRoute';

export const Navigator = (props: NavigatorProps) => {

	const { type, routes, ...rest } = props;

	// If routes is a thunk, resolve it
	const resolvedRoutes: RouteConfig[] = (typeof routes === 'function') ? routes() : routes;

	// Get appropriate navigator creator function
	const NavigatorComponent = (type === 'stack') ? Stack : Switch;

	return (
		<BlueBaseConsumer>
		{(BB: BlueBase) => (
			<NavigatorComponent {...rest}>
				{resolvedRoutes.map(renderRoute(type, Navigator, BB))}
			</NavigatorComponent>
		)}
		</BlueBaseConsumer>
	);
};
