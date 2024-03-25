import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@constants/theme';

import { IconProps } from '.';

const PlusIcon = ({ color = COLORS.sea.dark, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 11H13V4C13 3.448 12.552 3 12 3C11.448 3 11 3.448 11 4V11H4C3.448 11 3 11.448 3 12C3 12.552 3.448 13 4 13H11V20C11 20.552 11.448 21 12 21C12.552 21 13 20.552 13 20V13H20C20.552 13 21 12.552 21 12C21 11.448 20.552 11 20 11Z"
        fill={color}
      />
    </Svg>
  );
};

export default PlusIcon;
