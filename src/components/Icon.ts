import { TextProps } from './Text';
import { getComponent } from '@bluebase/core';

export interface IconProps extends TextProps {
	size?: number;
	name?: string;
	color?: string;
}

export const Icon = getComponent<IconProps>('Icon');
