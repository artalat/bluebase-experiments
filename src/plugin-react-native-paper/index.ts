// tslint:disable: object-literal-sort-keys
import {
	Divider,
	DrawerItem,
	DrawerSection,
	ListItem,
	ListSection,
	ListSubheader,
} from './components';
import { Plugin } from '@bluebase/core';

const plugin: Partial<Plugin> = {

	key: 'react-native-paper',
	name: 'React Native Paper',

	components: {
		Divider,
		DrawerItem,
		DrawerSection,
		ListItem,
		ListSection,
		ListSubheader,
	},

};

export default {
	...plugin
};
