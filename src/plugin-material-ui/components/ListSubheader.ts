import { ListSubheaderProps } from '../../components/index';
import MUIListSubheader from '@material-ui/core/ListSubheader';
import { componentMapper } from '../../component-mapper/index';

// TODO: Pass remaining props
export const ListSubheader = componentMapper<ListSubheaderProps>(MUIListSubheader, {
	inset: 'inset',
});

