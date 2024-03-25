import React, { memo, ReactNode } from 'react';

import Text from '@components/atoms/Text';
import { THEME } from '@constants/theme';
import { BaseStylesProps } from '@typings/styles';

export type TitleLevel = 1 | 2 | 3 | 4;

export interface TitleProps extends BaseStylesProps {
  children: ReactNode;
  color?: string;
  level?: TitleLevel;
}

const LEVEL_STYLES = {
  1: {
    fontSize: 24,
    lineHeight: 28,
    bold: true,
  },
  2: {
    fontSize: 20,
    lineHeight: 24,
    bold: true,
  },
  3: {
    fontSize: 16,
    lineHeight: 24,
    bold: true,
  },
  4: {
    fontSize: 14,
    lineHeight: 20,
    bold: false,
  },
};

const Title = ({
  children,
  style,
  level = 1,
  color = THEME.title.color,
}: TitleProps) => {
  return (
    <Text
      style={style}
      fontSize={LEVEL_STYLES[level].fontSize}
      bold={LEVEL_STYLES[level].bold}
      lineHeight={LEVEL_STYLES[level].lineHeight}
      color={color}>
      {children}
    </Text>
  );
};

export default memo(Title);
