import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface HeaderBackButtonStyles {
	androidButtonWrapper: StyleProp<ViewStyle>,
	icon: StyleProp<ImageStyle>,
	iconWithTitle: StyleProp<ImageStyle>,
	wrapper: StyleProp<ViewStyle>,
	title: StyleProp<TextStyle>,
}

export interface HeaderBackButtonProps {
	tintColor?: string;
	backTitleVisible?: boolean,
	title?: string | null;
	backImage?: React.ReactElement<any>;
	truncatedTitle?: string;
	titleStyle?: StyleProp<TextStyle>;
	pressColorAndroid?: string;
	onPress?: () => void,
	width?: number,
	allowFontScaling?: boolean,
	styles?: Partial<HeaderBackButtonStyles>,
	style?: StyleProp<ViewStyle>,
	testId?: string,
}

export const HeaderBackButton = getComponent<HeaderBackButtonProps>('HeaderBackButton');
