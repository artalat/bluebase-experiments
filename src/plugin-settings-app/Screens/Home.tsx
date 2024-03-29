import { StatusBar, View, ScrollView } from 'react-native';
import { Divider, ListSection, ListItem, ListSubheader } from '../../components';
import React from 'react';
import { Button } from '@bluebase/core';
// tslint:disable: jsx-no-lambda

export class HomeScreen extends React.Component<any> {
	render() {
		return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
				<ScrollView style={{ flex: 1 }}>
					<ListSection>
						<ListSubheader>Apps</ListSubheader>
						<ListItem
							title="Setting"
							description="Go to Settings Page"
							onPress={() => this.props.navigation.navigate('Settings')}
						/>
						<ListItem
							title="Tabs"
							onPress={() => this.props.navigation.navigate('SettingsTabs')}
						/>
						<ListItem
							title="Bottom Tabs"
							onPress={() => this.props.navigation.navigate('SettingsBottomTabs')}
						/>
						<ListItem
							title="Drawer"
							onPress={() => this.props.navigation.navigate('SettingsDrawer')}
						/>
					</ListSection>
					<Divider />
					<ListSection>
						<ListSubheader>Danger</ListSubheader>
						<ListItem
							title="Delete Place"
							description="Do you want to delete this place? This action is not reversable."
							right={<Button>Delete</Button>}
						/>
					</ListSection>
				</ScrollView>
      </View>
		);
	}
}
