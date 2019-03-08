import { DrawerSectionProps } from '../../components/index';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import React from 'react';
import { componentMapper } from '../../component-mapper/index';

export const DrawerSection = componentMapper<DrawerSectionProps>(List, {
	children: 'children',
	subheader: {
		transform: ({ title }: DrawerSectionProps) => title ? <ListSubheader>{title}</ListSubheader> : null
	}
});

