import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@constants/theme';

import { IconProps } from '.';

const ChevronRightIcon = ({
  color = COLORS.sea.dark,
  size = 24,
}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 21L18 12L9 3L6.77606 5.22394L13.5521 12L6.77606 18.7761L9 21Z"
        fill={color}
      />
    </Svg>
  );
};

export default ChevronRightIcon;
