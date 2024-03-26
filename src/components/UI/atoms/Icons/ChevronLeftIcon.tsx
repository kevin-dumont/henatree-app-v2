import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@/constants/theme';

import { IconProps } from '.';

const ChevronLeftIcon = ({ color = COLORS.sea.dark, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 3L6 12L15 21L17.2239 18.7761L10.4479 12L17.2239 5.22394L15 3Z"
        fill={color}
      />
    </Svg>
  );
};

export default ChevronLeftIcon;
