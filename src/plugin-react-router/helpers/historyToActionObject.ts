import { NavigationActionsObject, NavigationParams, BlueBase, joinPaths } from '@bluebase/core';
import { RouteComponentProps } from '../lib';
import { NavigatorProps, RouteConfig, NavigationActionPayload } from '@bluebase/core/dist/components';

export const historyToActionObject = (router: RouteComponentProps, BB: BlueBase) => {

	const configs: NavigatorProps = BB.Configs.getValue('plugin.react-router.navigation.configs');

	const obj = findRouteByKey(router.match.path, 'path', configs);

	const executeAction = (fn: any, routeName: NavigationActionPayload, params?: NavigationParams) => {

		let path;

		if (typeof routeName === 'string') {
			const routeObj = findRouteByKey(routeName, 'name', configs);
			path = routeObj && routeObj.path;
		}
		else if (typeof (routeName as any).routeName === 'string') {
			const routeObj = findRouteByKey(routeName as any, 'routeName', configs);
			path = routeObj && routeObj.path;
		}
		else if (typeof (routeName as any).path === 'string') {
			path = (routeName as any).path;
		}

		if (!path) {
			throw Error('Invalid props provided to navigation action');
		}

		fn(`/${joinPaths(path)}`, params);
	};

	const actions: NavigationActionsObject = {

		navigate: (routeName, params?: NavigationParams) => {
			return executeAction(router.history.push, routeName, params);
		},

		push: (routeName, params?: NavigationParams) => {
			return executeAction(router.history.push, routeName, params);
		},

		replace: (routeName, params?: NavigationParams) => {
			return executeAction(router.history.replace, routeName, params);
		},

		pop: (steps: number = 0) => {
			router.history.go(steps * -1);
		},

		goBack: () => {
			router.history.goBack();
		},

		setParams: (params: NavigationParams) => {
			router.history.replace(router.match.path, { ...router.match.params, ...params });
		},

		getParam: (key: string, defaultValue: any) => {
			return (router.match.params as any)[key] || defaultValue;
		},

		source: router,

		state: {
			key: router.location.key,
			params: { ...router.location.state, ...router.match.params },
			routeName: obj ? obj.name : '',
			search: router.location.search,
			url: router.match.url,
		},
	};

	return actions;
};

function findRouteByKey(search: string, key: string, configs: NavigatorProps): RouteConfig | null {

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