import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@/constants/theme';

import { IconProps } from '.';

const ArrowRightIcon = ({ color = COLORS.sea.dark, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M1 13.5L16.9814 13.5L11.3557 18.885L13.5714 21L23 12L13.5714 3L11.3557 5.115L16.9814 10.5L1 10.5L1 13.5Z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowRightIcon;
