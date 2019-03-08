import { DividerProps } from '../../components';
import MUIDivider from '@material-ui/core/Divider';
import { componentMapper } from '../../component-mapper/index';

export const Divider = componentMapper<DividerProps>(MUIDivider, {
	variant: {
		transform: ({ inset }: DividerProps) => inset === true ? 'inset' : 'fullWidth'
	},
});

