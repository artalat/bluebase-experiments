import { BootOptions } from '@bluebase/core';
import ReactNativePaperPlugin from '../../src/plugin-react-native-paper';
import ReactNavigationPlugin from '../../src/plugin-react-navigation';
import commonBootOptions from '../common/bluebase';
import deepmerge from 'deepmerge';

// const assetsPath = `../../assets/expo`;

/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {

	plugins: [
		ReactNativePaperPlugin,
		ReactNavigationPlugin,
	]
};

export default deepmerge(commonBootOptions, bootOptions);
