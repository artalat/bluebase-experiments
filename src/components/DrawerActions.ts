import { RenderPropChildren, getComponent } from '@bluebase/core';

export interface DrawerActionsObject {
	openDrawer: () => void;
	closeDrawer: () => void;
	toggleDrawer: () => void;
}

export interface DrawerActionsProps {
	children: RenderPropChildren<DrawerActionsObject>
}

/**
 * A render prop component to control the DrawerLayout
 */
export const DrawerActions = getComponent<DrawerActionsProps>('DrawerActions');
