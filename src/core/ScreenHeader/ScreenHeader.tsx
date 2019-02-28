import {
  Animated,
  I18nManager,
  Image,
  MaskedViewIOS,
  Platform,
	SafeAreaView,
  StyleSheet,
	View,
} from 'react-native';
import { NavigationOptions, getComponent } from '@bluebase/core';
import React from 'react';

const HeaderTitle = getComponent('ScreenHeaderTitle');
const HeaderBackButton = getComponent('ScreenHeaderBackButton');

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

// These can be adjusted by using headerTitleContainerStyle on navigationOptions
const TITLE_OFFSET_CENTER_ALIGN = Platform.OS === 'ios' ? 70 : 56;
const TITLE_OFFSET_LEFT_ALIGN = Platform.OS === 'ios' ? 20 : 56;

const getTitleOffsets = (
  layoutPreset,
  forceBackTitle,
  hasLeftComponent,
  hasRightComponent
) => {
	if (layoutPreset === 'left') {
    // Maybe at some point we should do something different if the back title is
    // explicitly enabled, for now people can control it manually

		const style = {
			left: TITLE_OFFSET_LEFT_ALIGN,
			right: TITLE_OFFSET_LEFT_ALIGN,
		};

		if (!hasLeftComponent) {
			style.left = 0;
		}
		if (!hasRightComponent) {
			style.right = 0;
		}

		return style;
	} else if (layoutPreset === 'center') {
		const style = {
			left: TITLE_OFFSET_CENTER_ALIGN,
			right: TITLE_OFFSET_CENTER_ALIGN,
		};
		if (!hasLeftComponent && !hasRightComponent) {
			style.left = 0;
			style.right = 0;
		}

		return style;
	}
};

const getAppBarHeight = (isLandscape: boolean) => {
	return Platform.OS === 'ios'
    ? isLandscape && !Platform.isPad
      ? 32
      : 44
    : 56;
};

class ScreenHeader extends React.PureComponent<NavigationOptions> {
	static get HEIGHT() {
		return APPBAR_HEIGHT + STATUSBAR_HEIGHT;
	}

	static defaultProps = {
		// layoutPreset: 'center',
	};

	state = {
		widths: {},
	};

	_getHeaderTitleString() {
		const { headerTitle, title } = this.props;

		if (typeof headerTitle === 'string') {
			return headerTitle;
		}

		if (title && typeof title !== 'string' && __DEV__) {
			throw new Error(
        `Invalid title - title must be string or null, instead it was of type ${typeof title}`
      );
		}

		return title;
	}

	_getBackButtonTitleString() {
		const { headerBackTitle } = this.props;
		if (headerBackTitle || headerBackTitle === null) {
			return headerBackTitle;
		}
		return null;
	}

	_getTruncatedBackButtonTitle() {
		return this.props.headerTruncatedBackTitle;
	}

	_renderTitleComponent = () => {
		const {
			headerTitle,
			headerTitleStyle: titleStyle,
			headerTintColor: color,
			headerTitleAllowFontScaling: allowFontScaling,
			layoutPreset,
		} = this.props;

		if (React.isValidElement(headerTitle)) {
			return headerTitle;
		}
		const titleString = this._getHeaderTitleString();

    // When title is centered, the width of left/right components depends on the
    // calculated size of the title.
		const onLayout = layoutPreset === 'center'
		? (e: any) => { this.setState({ titleWidth: e.nativeEvent.layout.width, }); }
    : undefined;

		const HeaderTitleComponent = (headerTitle && typeof headerTitle !== 'string')
		? headerTitle
		: HeaderTitle;

		// return (<Text>{titleString}</Text>);
		return (
      <HeaderTitleComponent
        onLayout={onLayout}
        allowFontScaling={allowFontScaling == null ? true : allowFontScaling}
        style={[
	color ? { color } : null,
	layoutPreset === 'center' ? { textAlign: 'center' } : { textAlign: 'left' },
	titleStyle,
]}
      >
        {titleString}
      </HeaderTitleComponent>
		);
	}

	_renderLeftComponent = () => {
		// debugger;
		const options = this.props;
		if (
      React.isValidElement(options.headerLeft) ||
      options.headerLeft === null
    ) {
			return options.headerLeft;
		}

		if (options.headerLeft === null) {
			return;
		}

		const backButtonTitle = this._getBackButtonTitleString();
		const truncatedBackButtonTitle = this._getTruncatedBackButtonTitle();
		const width = this.state.titleWidth
      ? (this.props.layout.initWidth - this.state.titleWidth) / 2
      : undefined;
		const RenderedLeftComponent = options.headerLeft || HeaderBackButton;
		return (
      <RenderedLeftComponent
        // onPress={goBack}
        pressColorAndroid={options.headerPressColorAndroid}
        tintColor={options.headerTintColor}
        backImage={options.headerBackImage}
        title={backButtonTitle}
        truncatedTitle={truncatedBackButtonTitle}
        backTitleVisible={this.props.backTitleVisible}
        allowFontScaling={options.headerBackAllowFontScaling}
        titleStyle={options.headerBackTitleStyle}
        layoutPreset={this.props.layoutPreset}
        width={width}
      />
		);
	}

	_renderRightComponent = () => {
		const { headerRight } = this.props;
		return headerRight || null;
	}

	_renderLeft() {

		let style = [];
		if (this.props.headerLeftContainerStyle) {
			style = [this.props.headerLeftContainerStyle];
		}

		return this._renderSubView(
			this._renderLeftComponent,
			{ ...this.props, style },
		);
	}

	_renderTitle(options: NavigationOptions) {
		const { layoutPreset } = this.props;
		const style = [
      { justifyContent: layoutPreset === 'center' ? 'center' : 'flex-start' },
			getTitleOffsets(
        layoutPreset,
        false,
        options.hasLeftComponent,
        options.hasRightComponent
      ),
			options.headerTitleContainerStyle,
		];

		return this._renderSubView(
			this._renderTitleComponent,
      { ...this.props, style },
    );
	}

	_renderRight() {

		let { style } = this.props;
		if (this.props.headerRightContainerStyle) {
			style = [style, this.props.headerRightContainerStyle];
		}

		return this._renderSubView(
			this._renderRightComponent,
      { ...this.props, style },
    );
	}

	_renderBackground() {
		const { headerBackground } = this.props;
		return this._renderSubView(headerBackground, { ...this.props, style: StyleSheet.absoluteFill });
	}

	_renderSubView(renderer?: React.ReactNode | React.ComponentType<any>, props?: any ) {
		if (!renderer) {
			return null;
		}
		else if (React.isValidElement(renderer)) {
			return renderer;
		}

		return React.createElement(renderer, props);
	}

	_renderHeader() {
		if (this.props.header === null) {
			return null;
		}
		const left = this._renderLeft();
		const right = this._renderRight();
		const title = this._renderTitle({
			hasLeftComponent: !!left,
			hasRightComponent: !!right,
			headerTitleContainerStyle: this.props.headerTitleContainerStyle,
		});

		const { transitionPreset } = this.props;

		const wrapperProps = {
			// style: styles.header,
		};

		if (
      this.props.headerLeft ||
      this.props.headerBackImage ||
      Platform.OS !== 'ios' ||
      transitionPreset !== 'uikit'
    ) {
			return (
        <View {...wrapperProps}>
          {title}
          {left}
          {right}
        </View>
			);
		} else {
			return (
        <MaskedViewIOS
          {...wrapperProps}
          maskElement={
            <View style={styles.iconMaskContainer}>
              <Image
                source={require('../assets/back-icon-mask.png')}
                style={styles.iconMask}
              />
              <View style={styles.iconMaskFillerRect} />
            </View>}
        >
          {title}
          {left}
          {right}
        </MaskedViewIOS>
			);
		}
	}

	render() {
		const { headerForceInset, headerStyle, headerTransparent, isLandscape } = this.props;
		const appBar = this._renderHeader();
		const background = this._renderBackground();

		const appBarHeight = getAppBarHeight(isLandscape);

    // TODO: warn if any unsafe styles are provided
		const containerStyles = [
			headerTransparent
        ? styles.transparentContainer
        : styles.container,
      // { height: appBarHeight },
			headerStyle,
		];

		const forceInset = headerForceInset || {
			bottom: 'never',
			horizontal: 'always',
			top: 'always',
		};

		// const animateViewStyles = [
		// 	Platform.OS === 'ios' && !headerTransparent
		// 		? {
		// 			backgroundColor: (headerStyle && headerStyle.backgroundColor) || DEFAULT_BACKGROUND_COLOR,
		// 		}
		// 		: null,
		// ];

		return (
			<SafeAreaView forceInset={forceInset} style={containerStyles}>
				{background}
				<View style={styles.flexOne}>{appBar}</View>
			</SafeAreaView>
		);
	}
}

let platformContainerStyles;
if (Platform.OS === 'ios') {
	platformContainerStyles = {
		borderBottomColor: '#A7A7AA',
		borderBottomWidth: StyleSheet.hairlineWidth,
	};
} else {
	platformContainerStyles = {
		elevation: 4,
	};
}

const DEFAULT_BACKGROUND_COLOR = '#FFF';

const styles = StyleSheet.create({
	container: {
		backgroundColor: DEFAULT_BACKGROUND_COLOR,
		...platformContainerStyles,
	},
	transparentContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		...platformContainerStyles,
		borderBottomWidth: 0,
		borderBottomColor: 'transparent',
		elevation: 0,
	},
	header: {
		...StyleSheet.absoluteFillObject,
		flexDirection: 'row',
	},
	item: {
		backgroundColor: 'transparent',
	},
	iconMaskContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	iconMaskFillerRect: {
		flex: 1,
		backgroundColor: '#d8d8d8',
		marginLeft: -5,
	},
	iconMask: {
    // These are mostly the same as the icon in ModularHeaderBackButton
		height: 23,
		width: 14.5,
		marginLeft: 8.5,
		marginTop: -2.5,
		alignSelf: 'center',
		resizeMode: 'contain',
		transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
	},
  // eslint-disable-next-line react-native/no-unused-styles
	title: {
		bottom: 0,
		top: 0,
		position: 'absolute',
		alignItems: 'center',
		flexDirection: 'row',
	},
  // eslint-disable-next-line react-native/no-unused-styles
	left: {
		left: 0,
		bottom: 0,
		top: 0,
		position: 'absolute',
		alignItems: 'center',
		flexDirection: 'row',
	},
  // eslint-disable-next-line react-native/no-unused-styles
	right: {
		right: 0,
		bottom: 0,
		top: 0,
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
	},
	flexOne: {
		flex: 1,
	},
});

export { ScreenHeader };