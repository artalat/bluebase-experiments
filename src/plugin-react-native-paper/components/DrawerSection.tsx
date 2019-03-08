import { Drawer } from 'react-native-paper';
import { DrawerSectionProps } from '../../components/index';
import { componentMapper } from '../../component-mapper/index';

export const DrawerSection = componentMapper<DrawerSectionProps>(Drawer.Section, {
	children: 'children',
	style: 'style',
	title: 'title',
});

