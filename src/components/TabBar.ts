// We follow TabBar from react-navigation

import { Animated, StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';
import { getComponent } from '@bluebase/core';

// export interface TabBarProps {

// 	/** Label and icon color of the active tab. */
// 	activeTintColor: string,

// 	/** Label and icon color of the inactive tab. */
// 	inactiveTintColor: string,

// 	/** Whether to show icon for tab, default is false. */
// 	showIcon: boolean,

// 	/** Whether to show label for tab, default is true. */
// 	showLabel: boolean,

// 	/** Whether to make label uppercase, default is true. */
// 	upperCaseLabel: boolean,

// 	/** Color for material ripple (Android >= 5.0 only). */
// 	pressColor: string,

// 	/** Opacity for pressed tab (iOS and Android < 5.0 only). */
// 	pressOpacity: number,

// 	/** Whether to enable scrollable tabs. */
// 	scrollEnabled: boolean,

// 	/** Whether label font should scale to respect Text Size accessibility settings, default is true. */
// 	allowFontScaling: boolean,
// }

// tabStyle - Style object for the tab.
// indicatorStyle - Style object for the tab indicator (line at the bottom of the tab).
// labelStyle - Style object for the tab label.
// iconStyle - Style object for the tab icon.
// style - Style object for the tab bar.


type Key = { key: string };
type TabBarRouteBase = Key & { testID?: string };

export type TabBarRoute<T extends TabBarRouteBase = TabBarRouteBase> = T & {
	title?: string,

	[key: string]: any,
};

export type TabBarNavigationState<T extends Key> = {
	index: number
	routes: T[]
};

export type TabBarScene<T> = {
	route: T
	focused: boolean
	index: number
};

export type TabBarLayout = {
	height: number
	width: number
};

export type SubscriptionName = 'reset' | 'position';

export type SceneRendererProps<T extends TabBarRouteBase = TabBarRouteBase> = {
	layout: TabBarLayout & {
		measured: boolean
	}
	navigationState: TabBarNavigationState<T>
	position: Animated.Value
	jumpTo: (key: string) => void
	getLastPosition: () => number
	subscribe: (
    event: SubscriptionName,
    callback: () => void
  ) => { remove: () => void }
};

export type TabBarProps<T extends TabBarRouteBase = TabBarRouteBase> = SceneRendererProps<
  T
> & {
	getLabelText?: (scene: TabBarScene<T>) => string | undefined | null
	getAccessible?: (scene: TabBarScene<T>) => boolean
	getAccessibilityLabel?: (scene: TabBarScene<T>) => string | undefined | null
	getTestID?: (scene: TabBarScene<T>) => string | undefined | null
	renderIcon?: (scene: TabBarScene<T>) => ReactNode
	renderLabel?: (scene: TabBarScene<T>) => ReactNode
	renderIndicator?: (props: { width: Animated.Value }) => ReactNode
	renderBadge?: (scene: TabBarScene<T>) => ReactNode
	onTabPress?: (scene: TabBarScene<T>) => void
	onTabLongPress?: (scene: TabBarScene<T>) => void
	pressColor?: string
	pressOpacity?: number
	scrollEnabled?: boolean
	bounces?: boolean
	useNativeDriver?: boolean;
	tabStyle?: StyleProp<ViewStyle>
	indicatorStyle?: StyleProp<ViewStyle>
	labelStyle?: StyleProp<ViewStyle>
	style?: StyleProp<ViewStyle>
};

export const TabBar = getComponent<TabBarProps>('TabBar');