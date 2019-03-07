import { TextProps } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface HeaderTitleProps extends TextProps {}
export const HeaderTitle = getComponent<HeaderTitleProps>('HeaderTitle');
