// tslint:disable: object-literal-sort-keys
import { DrawerActions, DrawerLayout } from './components/DrawerLayout';
import { BottomNavigation } from './components/BottomNavigation';
import { ListItem } from './components/ListItem';
import { ListSection } from './components/ListSection';
import { ListSubheader } from './components/ListSubheader';
import { Plugin } from '@bluebase/core';
import { TabBar } from './components/TabBar';

const plugin: Partial<Plugin> = {

	key: 'material-ui',
	name: 'Material UI',

	components: {
		BottomNavigation,
		DrawerActions,
		DrawerLayout,
		ListItem,
		ListSection,
		ListSubheader,
		TabBar,
	},

};

export default {
	...plugin
};
