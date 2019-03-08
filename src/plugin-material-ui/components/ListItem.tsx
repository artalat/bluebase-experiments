import { ListItemProps } from '../../components/index';
import ListItemText from '@material-ui/core/ListItemText';
import MUIListItem from '@material-ui/core/ListItem';
import React from 'react';

export const ListItem = (props: ListItemProps) => {

	const { active, disabled, description, left, onPress, right, title } = props;

	return (
		<MUIListItem button={!!onPress} disabled={disabled} selected={active} onClick={onPress}>
			{left}
			{(title || description) ? <ListItemText inset={!!left} primary={title} secondary={description} /> : null}
			{right}
		</MUIListItem>
	);
};
