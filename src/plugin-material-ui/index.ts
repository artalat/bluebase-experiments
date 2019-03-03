// tslint:disable: object-literal-sort-keys
import { Plugin } from '@bluebase/core';
import { TabBar } from './components/TabBar';

const plugin: Partial<Plugin> = {

	key: 'material-ui',
	name: 'Material UI',

	components: {
		TabBar,
	},

};

export default {
	...plugin
};
