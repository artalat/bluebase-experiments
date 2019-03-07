import { ViewProps, getComponent } from '@bluebase/core';

export interface ListSectionProps extends ViewProps {}

export const ListSection = getComponent<ListSectionProps>('ListSection');
