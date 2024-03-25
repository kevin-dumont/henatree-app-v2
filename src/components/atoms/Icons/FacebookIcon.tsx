import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '.';

const FacebookIcon = ({ color, size = 24 }: IconProps) => (
  <Svg fill={color || '#3B5998'} width={size} height={size} viewBox="0 0 24 24">
    <Path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
  </Svg>
);

export default FacebookIcon;
