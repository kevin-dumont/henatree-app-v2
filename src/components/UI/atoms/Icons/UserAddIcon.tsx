import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@/constants/theme';

import { IconProps } from '.';

const UserAddIcon = ({ color = COLORS.sea.dark, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3ZM18 12C14.7 12 12 14.7 12 18C12 21.3 14.7 24 18 24C21.3 24 24 21.3 24 18C24 14.7 21.3 12 18 12ZM11.0508 14.0469C7.89078 14.3089 3 15.796 3 18.5V21H10.5879C10.2119 20.073 10 19.062 10 18C10 16.56 10.3848 15.2139 11.0508 14.0469ZM17 15H19V17H21V19H19V21H17V19H15V17H17V15Z"
        fill={color}
      />
    </Svg>
  );
};

export default UserAddIcon;
