import {
	BlueBase,
	BlueBaseConsumer,
	NavigatorProps,
	resolveThunk,
} from '@bluebase/core';
import React from 'react';
import { RouteConfigWithResolveSubRoutes } from './types';
import { Switch } from '../lib';
import { renderRoute } from '../helpers/renderRoute';

export const SwitchNavigator = (props: NavigatorProps) => {

	const { type, routes, ...rest } = props;

	return (
		<BlueBaseConsumer>
		{(BB: BlueBase) => {

			// If routes is a thunk, resolve it
			const resolvedRoutes = resolveThunk<RouteConfigWithResolveSubRoutes[]>(routes as any, BB);

			return (
				<Switch {...rest}>
					{resolvedRoutes.map(route => renderRoute(route, { ...props, routes: resolvedRoutes }, BB))}
				</Switch>
			);
		}}
		</BlueBaseConsumer>
	);
};
