import { BootOptions } from '@bluebase/core';
import MaterialUIPlugin from '../../src/plugin-material-ui';
import ReactRouterPlugin from '../../src/plugin-react-router';
import commonBootOptions from '../common/bluebase';
import deepmerge from 'deepmerge';

const bootOptions: Partial<BootOptions> = {

	plugins: {
		'material-ui': MaterialUIPlugin,
		'react-router': ReactRouterPlugin,
	}
};

export default deepmerge(commonBootOptions, bootOptions);
