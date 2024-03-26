import React from 'react';
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { COLORS } from '@/constants/theme';

import { IconProps } from '.';

const CompassIcon = ({ color = COLORS.sea.dark, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0)">
        <Circle cx="15.5" cy="11.5" r="6.5" fill="white" />
        <Path
          d="M11.9999 2.39998C6.6983 2.39998 2.3999 6.69838 2.3999 12C2.3999 17.3016 6.6983 21.6 11.9999 21.6C17.3015 21.6 21.5999 17.3016 21.5999 12C21.5999 6.69838 17.3015 2.39998 11.9999 2.39998ZM17.5999 6.39998L13.5999 13.6L6.3999 17.6L10.3999 10.4L17.5999 6.39998ZM11.9999 11.2C11.7877 11.2 11.5842 11.2843 11.4342 11.4343C11.2842 11.5843 11.1999 11.7878 11.1999 12C11.1999 12.2122 11.2842 12.4156 11.4342 12.5657C11.5842 12.7157 11.7877 12.8 11.9999 12.8C12.2121 12.8 12.4156 12.7157 12.5656 12.5657C12.7156 12.4156 12.7999 12.2122 12.7999 12C12.7999 11.7878 12.7156 11.5843 12.5656 11.4343C12.4156 11.2843 12.2121 11.2 11.9999 11.2Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CompassIcon;
