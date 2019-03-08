import { List } from 'react-native-paper';
import { ListItemProps } from '../../components/index';
import { componentMapper } from '../../component-mapper/index';

export const ListItem = componentMapper<ListItemProps>(List.Item, {
	active: 'active',
	description: 'description',
	left: {
		transform: (props: ListItemProps) => () => props.left
	},
	onPress: {
		transform: (props: ListItemProps) => !!props.disabled ? undefined : props.onPress
	},
	right: {
		transform: (props: ListItemProps) => () => props.right
	},
	style: 'style',
	title: 'title',
});

