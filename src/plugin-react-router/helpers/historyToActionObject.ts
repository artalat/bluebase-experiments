import { NavigationActionsObject, NavigationParams } from '@bluebase/core';
import { RouteComponentProps } from '../lib';

export const historyToActionObject = (router: RouteComponentProps) => {

	const actions: NavigationActionsObject = {

		navigate: (path: string, params?: NavigationParams) => {
			router.history.push(path, params);
		},

		push: (path: string, params?: NavigationParams) => {
			router.history.push(path, params);
		},

		replace: (path: string, params?: NavigationParams) => {
			router.history.replace(path, params);
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

		getParam: (key: string) => {
			return (router.match.params as any)[key];
		},

		source: router,
	};

	return actions;
};