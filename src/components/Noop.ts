import React from 'react';
import { getComponent } from '@bluebase/core';

export interface NoopProps {
	children?: React.ReactNode,
}

export const Noop = getComponent<NoopProps>('Noop');
