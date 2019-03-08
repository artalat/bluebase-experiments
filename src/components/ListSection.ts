import { ViewProps, getComponent } from '@bluebase/core';
import React from 'react';

export interface ListSectionProps extends ViewProps {
	children?: React.ReactNode,
}

export const ListSection = getComponent<ListSectionProps>('ListSection');
