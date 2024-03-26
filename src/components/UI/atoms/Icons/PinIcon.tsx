import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@/constants/theme';

import { IconProps } from '.';

const PinIcon = ({ color = COLORS.sea.dark, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.7693 0C7.36929 0 2.77679 3.494 2.76929 8.5C2.76029 14.4905 11.7693 23.5 11.7693 23.5C11.7693 23.5 20.7788 14.503 20.7693 8.5C20.7613 3.5015 16.1693 0 11.7693 0ZM11.7693 12.5C9.56029 12.5 7.76929 10.709 7.76929 8.5C7.76929 6.291 9.56029 4.5 11.7693 4.5C13.9783 4.5 15.7693 6.291 15.7693 8.5C15.7693 10.709 13.9783 12.5 11.7693 12.5Z"
        fill={color}
      />
    </Svg>
  );
};

export default PinIcon;
