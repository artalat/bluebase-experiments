import { Button, Text, View } from 'react-native';
import React from 'react';
import { NavigationActions } from '@bluebase/core';

export class SettingsScreen extends React.Component {
	render() {
		return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <NavigationActions>
          {(a: any) => (
            <Button
              title="Home"
              onPress={() => a.navigate('')}
            />
          )}
        </NavigationActions>
        <Button
          title="Go Deep"
          onPress={() => this.props.navigation.navigate('Deep')}
        />
      </View>
		);
	}
}
