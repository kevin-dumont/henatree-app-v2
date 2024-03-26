import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@/constants/theme';

import { IconProps } from '.';

const UserIcon = ({ color = COLORS.sea.dark, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2.4C9.34876 2.4 7.19996 4.5488 7.19996 7.2V8C7.19996 10.6512 9.34876 12.8 12 12.8C14.6512 12.8 16.8 10.6512 16.8 8V7.2C16.8 4.5488 14.6512 2.4 12 2.4ZM11.9984 15.2C8.7936 15.2 4.6816 16.9335 3.4984 18.4719C2.7672 19.4231 3.46326 20.8 4.66246 20.8H19.3359C20.5351 20.8 21.2312 19.4231 20.5 18.4719C19.3168 16.9343 15.2032 15.2 11.9984 15.2Z"
        fill={color}
      />
    </Svg>
  );
};

export default UserIcon;
