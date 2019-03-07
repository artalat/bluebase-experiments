import { getComponent } from '@bluebase/core';

export interface ListAccordionProps {
	title: React.ReactNode;
	description?: React.ReactNode;
	left?: React.ReactNode;
	right?: React.ReactNode;
	onPress?: () => void;
	children: React.ReactNode;
	expanded?: boolean;
}

export const ListAccordion = getComponent<ListAccordionProps>('ListAccordion');
