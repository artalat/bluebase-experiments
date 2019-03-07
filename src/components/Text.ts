import { TextProps as NativeTextProps, TextStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface TextStyles {
	root: TextStyle,
}

export interface TextProps extends NativeTextProps {
	styles?: Partial<TextStyles>
}

export const Text = getComponent<TextProps>('Text');
