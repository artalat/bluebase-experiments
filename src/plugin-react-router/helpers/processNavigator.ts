import {
	NavigatorProps,
	joinPaths,
	resolveThunk,
} from '@bluebase/core';

export function processNavigator(navigator: NavigatorProps, parentPath: string = ''): NavigatorProps {

	const routes = resolveThunk(navigator.routes).map(r => {
		const path = `/${joinPaths(parentPath, r.path)}`;
		const resolvedNavigator = r.navigator ? processNavigator(r.navigator, path) : undefined;

		return {
			...r,
			navigator: resolvedNavigator,
			path,
		};
	});

	return {
		...navigator,
		routes,
	};
}
