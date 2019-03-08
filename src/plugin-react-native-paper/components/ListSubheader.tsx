import { ListSubheaderProps, Text } from '../../components/index';
// import { List } from 'react-native-paper';
import React from 'react';
import { componentMapper } from '../../component-mapper/index';

// FIXME: List.Subheader not found????
export const ListSubheader = componentMapper<ListSubheaderProps>(Text, {
	children: {
		transform: (props: ListSubheaderProps) => (typeof props.children === 'string')
		? React.createElement(Text, { children: props.children })
		: props.children
	},
	inset: 'inset',
});

