import { List } from 'react-native-paper';
import { ListSectionProps } from '../../components/index';
import { componentMapper } from '../../component-mapper/index';

export const ListSection = componentMapper<ListSectionProps>(List.Section, {
	children: 'children',
});

