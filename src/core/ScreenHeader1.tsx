import { Button, Text, Theme, View, getComponent, NavigationActionsProps } from '@bluebase/core';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

const NavigationActions = getComponent<NavigationActionsProps>('NavigationActions');
const ScreenHeaderTitle = getComponent('ScreenHeaderTitle');
const ScreenHeaderBackButton = getComponent('ScreenHeaderBackButton');

export const ScreenHeader = (props: any) => {

	const { title, navigation, styles } = props;

	return (
		<View style={styles.root}>
			<StatusBar backgroundColor="blue" barStyle="light-content" />
			<NavigationActions children={({ goBack }) => (
				<SafeAreaView style={{ flexDirection: 'row' }}>
					<ScreenHeaderBackButton
						title="A very long Back title" 
						tintColor="#FFF"
						onPress={goBack} 
						backTitleVisible
					/>
					<ScreenHeaderTitle style={styles.titleText}>{title}</ScreenHeaderTitle>
				</SafeAreaView>
			)} />
		</View>
	);
};

ScreenHeader.defaultStyles = (theme: Theme) => ({

	backButton: {
		marginRight: theme.spacing.unit,
	},

	root: {
		alignItems: 'center',
		backgroundColor: theme.palette.primary.main,
		flexDirection: 'row',
		// paddingBottom: theme.spacing.unit * 2,
		// paddingLeft: theme.spacing.unit * 2,
		// paddingRight: theme.spacing.unit * 2,
		// paddingTop: theme.spacing.unit * 2,
	},

	titleText: {
		...theme.typography.h6,
		color: theme.palette.primary.contrastText,
	}
});
