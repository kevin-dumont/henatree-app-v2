import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@/constants/theme';

import { IconProps } from '.';

const EnvelopeIcon = ({ color = COLORS.sea.dark, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 4C11.5298 3.99999 11.0592 4.12108 10.6395 4.36562V4.36738L3.89297 8.30312C3.34098 8.62497 3 9.21809 3 9.85703V18.8799C3 19.8636 3.81624 20.6799 4.8 20.6799H19.2C20.1838 20.6799 21 19.8636 21 18.8799V9.85703C21 9.21895 20.6589 8.62488 20.107 8.30312L13.3605 4.36738C12.941 4.12254 12.4702 4.00001 12 4ZM12 5.79824C12.1564 5.79832 12.3133 5.83943 12.4535 5.92129L19.2 9.85703V9.85879V9.90098L12.951 13.7893C12.3687 14.152 11.6313 14.152 11.049 13.7893L4.8 9.90098V9.85703L11.5465 5.92129C11.6875 5.83914 11.8436 5.79817 12 5.79824Z"
        fill={color}
      />
    </Svg>
  );
};

export default EnvelopeIcon;
