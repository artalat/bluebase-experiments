import List from '@material-ui/core/List';
import { ListSectionProps } from '../../components/index';
import ListSubheader from '@material-ui/core/ListSubheader';
import React from 'react';
import { componentMapper } from '../../component-mapper/index';

export const ListSection = componentMapper<ListSectionProps>(List, {
	children: 'children',
	subheader: {
		transform: (props: ListSectionProps) => {

			const { children } = props;
			let subheader;

			for (const child of React.Children.toArray(children)) {
				if ((child as any).type.displayName === 'ListSubheader'){
					subheader = (child as any).props.children;
					break;
				}
			}

			return subheader ? <ListSubheader>{subheader}</ListSubheader> : null;
		}
	}
});

