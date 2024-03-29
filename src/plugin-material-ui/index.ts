// tslint:disable: object-literal-sort-keys
import {
	BottomNavigation,
	Divider,
	DrawerActions,
	DrawerItem,
	DrawerLayout,
	DrawerSection,
	ListItem,
	ListSection,
	ListSubheader,
	TabBar,
} from './components';
import { Plugin } from '@bluebase/core';

const plugin: Partial<Plugin> = {

	key: 'material-ui',
	name: 'Material UI',

	components: {
		BottomNavigation,
		Divider,
		DrawerActions,
		DrawerItem,
		DrawerLayout,
		DrawerSection,
		ListItem,
		ListSection,
		ListSubheader,
		TabBar,
	},

};

export default {
	...plugin
};
