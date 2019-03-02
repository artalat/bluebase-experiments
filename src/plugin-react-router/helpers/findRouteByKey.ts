import {
	NavigatorProps,
	RouteConfig,
} from '@bluebase/core';

export function findRouteByKey(search: string, key: string, configs: NavigatorProps): RouteConfig | null {

	let found = null;

	(configs.routes as RouteConfig[]).forEach((route) => {

		if (route[key] === search) {
			found = route;
			return;
		}

		if (route.navigator && route.navigator.routes) {
			found = findRouteByKey(search, key, route.navigator);
		}
	});

	return found;
}