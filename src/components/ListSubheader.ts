import React from 'react';
import { TextProps } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface ListSubheaderProps extends TextProps {
	children: React.ReactNode,
	inset?: boolean;
}

export const ListSubheader = getComponent<ListSubheaderProps>('ListSubheader');
