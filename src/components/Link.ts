import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { NavigationActionParams } from './NavigationActions';
import { getComponent } from '@bluebase/core';

export interface LinkProps {
	routeName?: string,
	path?: string,
	params?: NavigationActionParams;
	replace?: boolean,
	onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
	component: React.ComponentType<any>
}

export const Link = getComponent<LinkProps>('Link');
