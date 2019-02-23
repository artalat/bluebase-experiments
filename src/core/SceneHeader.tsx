import { Button, Text, Theme, View } from '@bluebase/core';
import React from 'react';
import { withNavigation } from '@react-navigation/core';

export const SceneHeader = withNavigation((props: any) => {

	const { title, navigation, styles } = props;

	return (
		<View style={styles.root}>

			<Button
				children="Back"
				onPress={navigation.goBack}
				styles={{ root: styles.backButton } as any}
			/>
			<Text style={styles.titleText}>{title}</Text>
		</View>
	);
});

SceneHeader.defaultStyles = (theme: Theme) => ({

	backButton: {
		marginRight: theme.spacing.unit,
	},

	root: {
		alignItems: 'center',
		backgroundColor: theme.palette.primary.main,
		flexDirection: 'row',
		paddingBottom: theme.spacing.unit * 2,
		paddingLeft: theme.spacing.unit * 2,
		paddingRight: theme.spacing.unit * 2,
		paddingTop: theme.spacing.unit * 2,
	},

	titleText: {
		...theme.typography.h6,
		color: theme.palette.primary.contrastText,
	}
});
