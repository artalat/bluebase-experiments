import { ViewProps } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface DividerProps extends ViewProps {
	inset?: boolean;
}

export const Divider = getComponent<DividerProps>('Divider');
