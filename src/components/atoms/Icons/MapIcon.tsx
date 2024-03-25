import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@constants/theme';

import { IconProps } from '.';

const MapIcon = ({ color = COLORS.sea.dark, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2.4001 4.00001C1.9585 4.00001 1.6001 4.35841 1.6001 4.80001V17.6C1.6001 17.9728 1.86075 18.2721 2.20635 18.3609L7.2001 19.8031V5.3672L2.71572 4.05313C2.61012 4.01953 2.5121 4.00001 2.4001 4.00001ZM15.2001 4.14845L8.8001 5.43907V19.8375L15.2001 18.5594V4.14845ZM16.8001 4.20001V18.6344L21.3454 19.9484C21.4262 19.9756 21.5097 20 21.6001 20C22.0417 20 22.4001 19.6416 22.4001 19.2V6.40001C22.4001 6.02001 22.1279 5.74395 21.7751 5.63595L16.8001 4.20001Z"
        fill={color}
      />
    </Svg>
  );
};

export default MapIcon;
