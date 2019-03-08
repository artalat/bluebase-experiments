import { ViewProps, getComponent } from '@bluebase/core';
import React from 'react';

export interface DrawerSectionProps extends ViewProps {
	children?: React.ReactNode;
	title?: string;
}

export const DrawerSection = getComponent<DrawerSectionProps>('DrawerSection');
