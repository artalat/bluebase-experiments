import { Button, H5, View } from '@bluebase/core';
import React from 'react';

export class LoginScreen extends React.Component {
	render() {
		return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <H5>Login Screen</H5>
				<Button
          children="Another Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
		);
	}
}
