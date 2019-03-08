import { Divider as RNPDivider } from 'react-native-paper';
import { DividerProps } from '../../components';
import { componentMapper } from '../../component-mapper/index';

export const Divider = componentMapper<DividerProps>(RNPDivider, {
	inset: 'inset',
	style: 'style',
});

