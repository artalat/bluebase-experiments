import { ListItemProps } from '../../components/index';
import ListItemText from '@material-ui/core/ListItemText';
import MUIListItem from '@material-ui/core/ListItem';
import React from 'react';

export const ListItem = (props: ListItemProps) => {

	const { disabled, description, left, onPress, right, selected, title } = props;

	return (
		<MUIListItem button={!!onPress} disabled={disabled} selected={selected} onClick={onPress}>
			{left}
			{(title || description) ? <ListItemText inset={!!left} primary={title} secondary={description} /> : null}
			{right}
		</MUIListItem>
	);
};
