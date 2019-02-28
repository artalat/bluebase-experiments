
import { Animated, Platform, TextStyle } from 'react-native';
import { TextProps, Theme } from '@bluebase/core';
import React from 'react';

const AnimatedText = Animated.Text;

export interface ScreenHeaderTitleProps extends TextProps {
	styles: {
		root: TextStyle
	}
}

const ScreenHeaderTitle = ({ style, styles, ...rest }: ScreenHeaderTitleProps) => (
  <AnimatedText
    numberOfLines={1}
    {...rest}
    style={[styles.root, style]}
    accessibilityTraits="header"
  />
);

ScreenHeaderTitle.defaultStyles = (theme: Theme) => ({
	root: {
		color: theme.palette.primary.contrastText,
		fontSize: Platform.OS === 'ios' ? 17 : 20,
		fontWeight: Platform.OS === 'ios' ? '600' : '500',
		marginHorizontal: 16,
	},
});

export { ScreenHeaderTitle };