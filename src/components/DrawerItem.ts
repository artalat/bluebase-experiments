import { IconProps } from './Icon';
import { getComponent } from '@bluebase/core';

export interface DrawerItemProps {
	title: React.ReactNode;
	icon?: IconProps;
	right?: React.ReactNode;
	onPress?: () => void;
	active?: boolean;
	disabled?: boolean;
}

export const DrawerItem = getComponent<DrawerItemProps>('DrawerItem');
