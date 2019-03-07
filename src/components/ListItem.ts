import { getComponent } from '@bluebase/core';

export interface ListItemProps {
	title: React.ReactNode;
	description?: React.ReactNode;
	left?: React.ReactNode;
	right?: React.ReactNode;
	onPress?: () => void;
	selected?: boolean;
	disabled?: boolean;
}

export const ListItem = getComponent<ListItemProps>('ListItem');
