import { Drawer } from 'react-native-paper';
import { DrawerItemProps } from '../../components/index';
import { componentMapper } from '../../component-mapper/index';

export const DrawerItem = componentMapper<DrawerItemProps>(Drawer.Item, {
	active: 'active',
	onPress: 'onPress',
	style: 'style',
	title: 'title',
});

