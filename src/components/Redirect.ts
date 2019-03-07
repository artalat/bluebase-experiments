import { NavigationActionParams } from './NavigationActions';
import { getComponent } from '@bluebase/core';

export interface RedirectProps {
	routeName?: string,
	path?: string,
	params?: NavigationActionParams;
	push?: boolean,
}

export const Redirect = getComponent<RedirectProps>('Redirect');
