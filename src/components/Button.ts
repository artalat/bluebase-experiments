import { TextStyle, ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';
import React from 'react';

export interface ButtonStyles {
	root: ViewStyle,
	primary: ViewStyle,
	secondary: ViewStyle,
	default: ViewStyle,
	link: ViewStyle,
	fullWidth: ViewStyle,
	text: TextStyle,
	primaryText: TextStyle,
	secondaryText: TextStyle,
	defaultText: TextStyle,
	linkText: TextStyle,
}

export interface ButtonProps {

	/* Label to be passed as child. */
	children?: React.ReactNode;

	/* Color prop of type enum. */
	color?:
		| 'primary'
		| 'secondary'
		| 'link'
		| 'default';

	/**
	 * Callback function fired when button is pressed.
	 */
	onPress?: (event?: any) => any;

	/**
	 * If true, renders a disabled button.
	 */
	disabled?: boolean;

	/**
	 * If true, button is generated with 100% width of the container.
	 */
	fullWidth?: boolean;

	/**
	 * If true, shows active state of the button.
	 */
	active?: boolean;

	/**
	 * The size of the button.
	 */
	size?: 'small' | 'medium' | 'large';

	/**
	 * Button Styles
	 */
	styles?: ButtonStyles,

  /**
   * Used to locate this view in end-to-end tests.
   */
	testID?: string,

	[key: string]: any;
}

export const Button = getComponent<ButtonProps>('Button');
