import { RouteComponentProps, withRouter } from './lib';
import { historyToActionObject } from './helpers/historyToActionObject';
import { BlueBaseConsumer } from '@bluebase/core';
import React from 'react';

export const NavigationActions = withRouter((props: RouteComponentProps & any) => {
	const { children, ...rest } = props;

	return <BlueBaseConsumer children={(BB) => {
		const actions = historyToActionObject(rest, BB);
		return children(actions);
	}} />;
});