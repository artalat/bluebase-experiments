import { Button, Text, View } from 'react-native';
import { NavigationActions } from '@bluebase/core';
import React from 'react';

export class SettingsScreen extends React.Component {
	render() {
		return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <NavigationActions>
          {({ navigate }: any) => (
            <Button
              title="Home"
              onPress={() => navigate('/')}
            />
          )}
        </NavigationActions>
      </View>
		);
	}
}
