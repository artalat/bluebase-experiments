import { BlueBase, BlueBaseContext, applyStyles } from '@bluebase/core';
import React from 'react';
import { View } from 'react-native';

/**
 * Main SystemApp. This is the component that renders content to the screen.
 */
export class View2 extends React.Component<any> {

	// static contextType = BlueBaseContext;

	render() {

		// const BB: BlueBase = this.context;

		// let ViewInternal = (BB.Components.getValue('View') as any).module;

		// ViewInternal = applyStyles(View);
		ViewInternal2 = (props) => <View {...props} />;

		return (
			<ViewInternal2 {...this.props} />
		);
	}
}