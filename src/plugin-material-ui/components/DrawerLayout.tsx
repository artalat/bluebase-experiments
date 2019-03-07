// tslint:disable: no-submodule-imports
import Drawer from '@material-ui/core/Drawer';
import { DrawerActionsObject } from '../../components/DrawerActions';
import { DrawerLayoutProps } from '../../components/DrawerLayout';
import React from 'react';

export interface DrawerLayoutState extends DrawerActionsObject {
	open: boolean,
}

export const DrawerContext: React.Context<DrawerActionsObject> = React.createContext({
	closeDrawer: () => { return; },
	openDrawer: () => { return; },
	toggleDrawer: () => { return; },
});

export const DrawerActions = (props: any) => React.createElement(DrawerContext.Consumer, props);

export class DrawerLayout extends React.Component<DrawerLayoutProps, DrawerLayoutState> {

	readonly state = {
		closeDrawer: () => this.setState({ open: false }),
		open: false,
		openDrawer: () => this.setState({ open: true }),
		toggleDrawer: () => this.setState({ open: !this.state.open }),
	};


	render() {

		const {
			children,
			drawerPosition,
			drawerType,
			onDrawerClose,
			onDrawerOpen,
			renderNavigationView,
		} = this.props;

		const drawerProps = {
			anchor: drawerPosition,
			children: renderNavigationView && renderNavigationView(),
			onBackdropClick: () => this.state.toggleDrawer(),
			onClose: onDrawerClose,
			onRendered: onDrawerOpen,
			open: this.state.open,
			variant: (drawerType === 'slide') ? 'persistent' : 'temporary' as any,
		};

    // The entire state is passed to the provider
		return (
      <DrawerContext.Provider value={this.state}>
					<Drawer {...drawerProps} 
			// 		SlideProps={{ 
			// 			style: { transform: 'translate(0px, 56px)' },

			// // onEntering: (node: any) => {
				
			// // 	node.style.webkitTransform = 'translate(0, 56px)';
			// // 	node.style.transform = 'translate(0, 56px)';
			// // },
			// 		}} 
					/>
        	{children}
      </DrawerContext.Provider>
		);
	}
}
