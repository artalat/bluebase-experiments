import { Button, Text, View } from 'react-native';
import React from 'react';
// tslint:disable: jsx-no-lambda

export class HomeScreen extends React.Component<any> {
	render() {
    console.log('screen props', this.props);
		return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Apps</Text>
        <Button
          title="Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
		);
	}
}
