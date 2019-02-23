import { Button, Text, View } from 'react-native';
import { NavigationActions } from '@bluebase/core';
import React from 'react';
// tslint:disable: jsx-no-lambda

export class HomeScreen extends React.Component<any> {
	render() {
		return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <NavigationActions>
          {(a: any) => (
            <Button
              title="New Settings"
              onPress={() => a.navigate('p/settings')}
            />
          )}
        </NavigationActions>
        <Button
          title="Go to Unknown"
          onPress={() => this.props.navigation.navigate('foo-bar')}
        />
      </View>
		);
	}
}
