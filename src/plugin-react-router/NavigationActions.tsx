import { RouteComponentProps, withRouter } from './lib';
import { historyToActionObject } from './helpers/historyToActionObject';

export const NavigationActions = withRouter((props: RouteComponentProps & any) => {
	const { children, ...rest } = props;
	const actions = historyToActionObject(rest);
	return children(actions);
});