import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

type renderFunction<T = any> = ((props: T) => React.ReactElement<T>);

export interface HeaderProps {
	headerTitleContainerStyle?: StyleProp<ViewStyle>,
	headerRightContainerStyle?: StyleProp<ViewStyle>,
	headerLeftContainerStyle?: StyleProp<ViewStyle>,
	layoutPreset?: 'left' | 'center',

	backTitleVisible?: boolean,
	headerBackAllowFontScaling?: boolean,

	styles?: Partial<HeaderStyles>

  // NavigationOptions
	title?: string;
	header?:
    | React.ReactElement<any>
    | renderFunction<any /*HeaderProps*/>
    | null;
	headerTransparent?: boolean;
	headerTitle?: string | React.ReactElement<any>;
	headerTitleStyle?: StyleProp<TextStyle>;
	headerTitleAllowFontScaling?: boolean;
	headerTintColor?: string;
	headerLeft?:
    | React.ReactElement<any>
    | ((backButtonProps: any /*HeaderBackButtonProps*/) => React.ReactElement<any>)
    | null;
	headerBackTitle?: string | null;
	headerBackImage?: React.ReactElement<any>;
	headerTruncatedBackTitle?: string;
	headerBackTitleStyle?: StyleProp<TextStyle>;
	headerPressColorAndroid?: string;
	headerRight?: React.ReactElement<any> | null;
	headerStyle?: StyleProp<ViewStyle>;
	headerForceInset?: any /*HeaderForceInset*/;
	headerBackground?:
    | React.ReactElement<any>
    | renderFunction<any /*HeaderProps*/>
    | null;
    // [key: string]: any,
}

export interface HeaderStyles {
	root: StyleProp<ViewStyle>,
	wrapper: StyleProp<ViewStyle>,
	transparentContainer: StyleProp<ViewStyle>,
	header: StyleProp<ViewStyle>,
	item: StyleProp<ViewStyle>,
	iconMaskContainer: StyleProp<ViewStyle>,
	iconMaskFillerRect: StyleProp<ViewStyle>,
	iconMask: StyleProp<ImageStyle>,
	title: StyleProp<ViewStyle>,
	left: StyleProp<ViewStyle>,
	right: StyleProp<ViewStyle>,
	flexOne: StyleProp<ViewStyle>,
}

/**
 * 🎩 Header
 */
export const Header = getComponent<HeaderProps>('Header');
