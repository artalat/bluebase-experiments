import {
	I18nManager,
  Image,
  Platform,
	StyleProp,
  Text,
	TextStyle,
  View,
} from 'react-native';
import React from 'react';

import TouchableItem from './TouchableItem';

// import defaultBackImage from '../assets/back-icon.png';
const defaultBackImage = require('../assets/back-icon.png');

export interface ScreenHeaderBackButtonProps {
	tintColor?: string;
	backTitleVisible?: boolean,
	title?: string | null;
	backImage?: React.ReactElement<any>;
	truncatedTitle?: string;
	titleStyle?: StyleProp<TextStyle>;
	pressColorAndroid?: string;
	onPress: () => void,
	width?: number,
	allowFontScaling?: boolean,
}

export interface HeaderBackButtonState {
	initialTextWidth?: number,
}

class ScreenHeaderBackButton extends React.PureComponent<ScreenHeaderBackButtonProps, HeaderBackButtonState> {
	static defaultProps = {
		pressColorAndroid: 'rgba(0, 0, 0, .32)',
		tintColor: Platform.select({
			ios: '#037aff',
		}),
		truncatedTitle: 'Back',
	};

	state: HeaderBackButtonState = {};

	_onTextLayout = e => {
		if (this.state.initialTextWidth) {
			return;
		}
		this.setState({
			initialTextWidth: e.nativeEvent.layout.x + e.nativeEvent.layout.width,
		});
	}

	_renderBackImage() {
		const { backImage, backTitleVisible, tintColor } = this.props;
		const title = this._getTitleText();

		let BackImage;
		let props;

		if (React.isValidElement(backImage)) {
			return backImage;
		} else if (backImage) {
			BackImage = backImage;
			props = {
				tintColor,
				title,
			};
		} else {
			BackImage = Image;
			props = {
				source: defaultBackImage,
				style: [
					this.props.styles.icon,
					!!backTitleVisible && this.props.styles.iconWithTitle,
					!!tintColor && { tintColor },
				],
			};
		}

		return <BackImage {...props} fadeDuration={0} />;
	}

	_getTitleText = () => {
		const { width, title, truncatedTitle } = this.props;

		const { initialTextWidth } = this.state;

		if (title === null) {
			return null;
		} else if (!title) {
			return truncatedTitle;
		} else if (initialTextWidth && width && initialTextWidth > width) {
			return truncatedTitle;
		} else {
			return title;
		}
	}

	_maybeRenderTitle() {
		const { allowFontScaling, backTitleVisible, titleStyle, tintColor } = this.props;
		const backTitleText = this._getTitleText();

		if (!backTitleVisible || backTitleText === null) {
			return null;
		}

		return (
      <Text
        accessible={false}
        onLayout={this._onTextLayout}
        style={[this.props.styles.title, !!tintColor && { color: tintColor }, titleStyle]}
        numberOfLines={1}
        allowFontScaling={!!allowFontScaling}
      >
        {this._getTitleText()}
      </Text>
		);
	}

	render() {
		const { styles, onPress, pressColorAndroid, title } = this.props;

		const button = (
      <TouchableItem
        accessible={true}
        accessibilityRole="button"
        accessibilityComponentType="button"
        accessibilityLabel={title ? `${title}, back` : 'Go back'}
        accessibilityTraits="button"
        testID="header-back"
        delayPressIn={0}
        onPress={onPress}
        pressColor={pressColorAndroid}
        style={styles.root}
        borderless={true}
      >
        <View style={styles.root}>
          {this._renderBackImage()}
          {this._maybeRenderTitle()}
        </View>
      </TouchableItem>
    );

		if (Platform.OS === 'android') {
			return <View style={styles.androidButtonWrapper}>{button}</View>;
		} else {
			return button;
		}
	}
}

ScreenHeaderBackButton.defaultStyles = () => ({
	androidButtonWrapper: {
		backgroundColor: 'transparent',
		margin: 13,
	},
	icon: Platform.OS === 'ios' ? iconIosStyles : iconDefaultStyles,
	iconWithTitle: Platform.OS === 'ios' ? { marginRight: 6, } : {},
	root: {
		alignItems: 'center',
		backgroundColor: 'transparent',
		flexDirection: 'row',
	},
	title: {
		fontSize: 17,
		paddingRight: 10,
	},
});

const iconIosStyles = {
	backgroundColor: 'transparent',
	height: 21,
	marginLeft: 9,
	marginRight: 22,
	marginVertical: 12,
	resizeMode: 'contain',
	transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
	width: 13,
};

const iconDefaultStyles = {
	backgroundColor: 'transparent',
	height: 24,
	margin: 3,
	resizeMode: 'contain',
	transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
	width: 24,
};

export { ScreenHeaderBackButton };