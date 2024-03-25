import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@constants/theme';

import { IconProps } from '.';

const HeartFilledIcon = ({ color = COLORS.sea.dark, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.5 3C13.605 3 12 5.09 12 5.09C12 5.09 10.395 3 7.5 3C4.462 3 2 5.462 2 8.5C2 14 12 21 12 21C12 21 22 14 22 8.5C22 5.462 19.538 3 16.5 3Z"
        fill={color}
      />
    </Svg>
  );
};

export default HeartFilledIcon;
