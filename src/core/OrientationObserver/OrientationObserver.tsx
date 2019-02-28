import { Dimensions, ScaledSize } from 'react-native';
import { RenderPropChildren, renderChildrenWithProps } from '@bluebase/core';
import React from 'react';

export const isOrientationLandscape = ({ width, height }: { width: number, height: number}) => width > height;

export interface OrientationObserverProps {
	children: RenderPropChildren<OrientationObserverState>
}

export interface OrientationObserverState {
	isLandscape: boolean,
}

export class OrientationObserver extends React.Component<OrientationObserverProps, OrientationObserverState> {
	constructor(props: OrientationObserverProps) {
		super(props);

		const isLandscape = isOrientationLandscape(Dimensions.get('window'));
		this.state = { isLandscape };
	}

	componentDidMount() {
		Dimensions.addEventListener('change', this.handleOrientationChange);
	}

	componentWillUnmount() {
		Dimensions.removeEventListener('change', this.handleOrientationChange);
	}

	handleOrientationChange = ({ window }: { window: ScaledSize }) => {
		const isLandscape = isOrientationLandscape(window);
		this.setState({ isLandscape });
	}

	render() {
		return renderChildrenWithProps(this.props.children, this.state);
	}
}