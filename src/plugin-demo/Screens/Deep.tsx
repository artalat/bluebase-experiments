import { Button, Text, View } from 'react-native';
import React from 'react';

// tslint:disable: jsx-no-lambda

export class DeepScreen extends React.Component<any> {
	render() {
		return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Settings!!"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go Deep"
          onPress={() => this.props.navigation.navigate('Deep')}
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Go to Unknown"
          onPress={() => this.props.navigation.navigate('foo-bar')}
        />
      </View>
		);
	}
}
