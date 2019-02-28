import { BootOptions } from '@bluebase/core';
import ReactRouterPlugin from '../../src/plugin-react-router';
import commonBootOptions from '../common/bluebase';
import deepmerge from 'deepmerge';

/**
 * Add your platform specific configs here. 
 * We keep all the universal (cross platform) configs in 
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {

	plugins: {
		'react-router': ReactRouterPlugin,
	}
};

export default deepmerge(commonBootOptions, bootOptions);
