import { NavigationInjectedProps, NavigationParams } from 'react-navigation';
import { NavigationActionsObject } from '@bluebase/core';

type NavigationProp = NavigationInjectedProps['navigation'];

const getTopNavigation = (navigation: NavigationProp): NavigationProp => {
	const parent = navigation.dangerouslyGetParent();
	if (parent) {
		return getTopNavigation(parent);
	}
	return navigation;
};

/**
 * Convert a react-navigation's navigation prop to NavigationActionsObject
 * @param navigation
 */
export const navigationToActionObject = (navigation: NavigationProp): NavigationActionsObject => {

	const { navigate, push, pop, replace, goBack, getParam, setParams } = navigation;

	const topNavigation = getTopNavigation(navigation);
	const router = topNavigation.router;

	if (!router) {
		throw Error('No router found in navigation.');
	}

	const execAction = (fn: ((...a: any[]) => void), path: string, params: NavigationParams) => {
		const action = router.getActionForPathAndParams(path, params) as any;

		if (!fn || !action) {
			return;
		}

		if (action.routeName) {
			fn(action.routeName, action.params, action.action);
		} else {
			fn(action);
		}
	};

	const actions: NavigationActionsObject = {
		getParam,
		goBack: () => goBack(),
		navigate: (path: string, params?: NavigationParams) => execAction(navigate, path, params),
		pop,
		push: (path: string, params?: NavigationParams) => execAction(push || navigate, path, params),
		replace: (path: string, params?: NavigationParams) => execAction(replace || navigate, path, params),
		setParams,

		source: navigation,
	};

	return actions;
};