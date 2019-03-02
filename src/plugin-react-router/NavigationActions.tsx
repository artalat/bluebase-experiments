import { RouteComponentProps, withRouter } from './lib';
import { BlueBaseConsumer } from '@bluebase/core';
import React from 'react';
import { historyToActionObject } from './helpers/historyToActionObject';

export const NavigationActions = withRouter((props: RouteComponentProps & any) => {
	const { children, ...rest } = props;

	return (
		<BlueBaseConsumer>
		{(BB) => {
			const actions = historyToActionObject(rest, BB);
			return children(actions);
		}}
		</BlueBaseConsumer>
	);
});