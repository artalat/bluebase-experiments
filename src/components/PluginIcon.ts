import { getComponent } from '@bluebase/core';

export interface PluginIconProps {

	/** Plugin key */
	id: string;

	/** Icon size */
	size?: number,

  /**
   * Used to locate this view in end-to-end tests.
   */
	testID?: string,

	[key: string]: any
}

export const PluginIcon = getComponent<PluginIconProps>('PluginIcon');
