import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { ListSectionProps } from '../../components/index';
import { componentMapper } from '../../component-mapper/index';
import React from 'react';

export const ListSection = componentMapper<ListSectionProps>(List, {
	children: 'children',
	subheader: {
		transform: (props: ListSectionProps) => {

			let subheader;

			for (const child of React.Children.toArray(props.children)) {
				if (child.type.displayName === 'ListSubheader'){
					subheader = child.props.children;
					break;
				}
			}

			return subheader ? <ListSubheader>{subheader}</ListSubheader> : null;
		}
	}
});

