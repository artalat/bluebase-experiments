import { TextProps } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface ListSubheaderProps extends TextProps {
	inset?: boolean;
}

export const ListSubheader = getComponent<ListSubheaderProps>('ListSubheader');
