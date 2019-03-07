import { NativeSyntheticEvent, NativeTouchEvent, ViewProps } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface DrawerSlideEvent extends NativeSyntheticEvent<NativeTouchEvent> {}

/**
 * DrawerLayout
 *
 * It provides a compatible API but allows for the componentto be
 * used on both Android and iOS. Please refer to React Native docs
 * for the detailed usage for standard parameters.
 */

export interface DrawerLayoutProps extends ViewProps {
  /**
   * Specifies the background color of the drawer. The default value
   * is white. If you want to set the opacity of the drawer, use rgba.
   * Example:
   * return (
   *   <DrawerLayout drawerBackgroundColor="rgba(0,0,0,0.5)">
   *   </DrawerLayout>
   * );
   */
	drawerBackgroundColor?: string;

  /**
   * Specifies the lock mode of the drawer. The drawer can be locked
   * in 3 states:
   *
   * - unlocked (default), meaning that the drawer will respond
   *   (open/close) to touch gestures.
   *
   * - locked-closed, meaning that the drawer will stay closed and not
   *   respond to gestures.
   *
   * - locked-open, meaning that the drawer will stay opened and
   *   not respond to gestures. The drawer may still be opened and
   *   closed programmatically (openDrawer/closeDrawer).
   */
	drawerLockMode?: 'unlocked' | 'locked-closed' | 'locked-open';

  /**
   * Specifies the side of the screen from which the drawer will slide in.
   * Options are `left` or `right`. Default is `left` position.
   */
	drawerPosition?: 'left' | 'right';

	/**
	 * possible values are: `front`, `back` or `slide` (default is `front`).
	 * It specifies the way the drawer will be displayed. When set to
	 * front the drawer will slide in and out along with the gesture
	 * and will display on top of the content view. When back is used
	 * the drawer displays behind the content view and can be revealed
	 * with gesture of pulling the content view to the side. Finally
	 * slide option makes the drawer appear like it is attached to the
	 * side of the content view; when you pull both content view and
	 * drawer will follow the gesture.
	 */
	drawerType?: 'front' | 'back' | 'slide';

  /**
   * Specifies the width of the drawer, more precisely the width of the
   * view that be pulled in from the edge of the window.
   */
	drawerWidth?: number;

  /**
   * Determines whether the keyboard gets dismissed in response to a drag.
   * - 'none' (the default), drags do not dismiss the keyboard.
   * - 'on-drag', the keyboard is dismissed when a drag begins.
   */
	keyboardDismissMode?: 'none' | 'on-drag';

  /**
   * Function called whenever the navigation view has been closed.
   */
	onDrawerClose?: () => void;

  /**
   * Function called whenever the navigation view has been opened.
   */
	onDrawerOpen?: () => void;

  /**
   * Function called whenever there is an interaction with the navigation view.
   */
	onDrawerSlide?: (event: DrawerSlideEvent) => void;

  /**
   * Function called when the drawer state has changed.
   * The drawer can be in 3 states:
   * - idle, meaning there is no interaction with the navigation
   *   view happening at the time
   * - dragging, meaning there is currently an interaction with the
   *   navigation view
   * - settling, meaning that there was an interaction with the
   *   navigation view, and the navigation view is now finishing
   *   it's closing or opening animation
   */
	onDrawerStateChanged?: (event: 'Idle' | 'Dragging' | 'Settling') => void;

  /**
   * The navigation view that will be rendered to the side of the
   * screen and can be pulled in.
   */
	renderNavigationView: () => JSX.Element;

  /**
   * Make the drawer take the entire screen and draw the background of
   * the status bar to allow it to open over the status bar. It will
   * only have an effect on API 21+.
   */
	statusBarBackgroundColor?: string;

	/**
	 * If `true`, the drawer is open. Defaults to `false`.
	 */
	open: boolean;
}

export const DrawerLayout = getComponent<DrawerLayoutProps>('DrawerLayout');