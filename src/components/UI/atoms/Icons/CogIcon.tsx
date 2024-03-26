import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@/constants/theme';

import { IconProps } from '.';

const CogIcon = ({ color = COLORS.sea.dark, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.4902 2C10.0112 2 9.60171 2.33859 9.50971 2.80859L9.17572 4.52344C8.35497 4.8338 7.59605 5.2674 6.92963 5.81445L5.2851 5.24805C4.8321 5.09205 4.33369 5.27936 4.09369 5.69336L2.58588 8.30664C2.34688 8.72164 2.43387 9.2485 2.79487 9.5625L4.11322 10.709C4.04466 11.1303 3.99994 11.5593 3.99994 12C3.99994 12.4407 4.04466 12.8697 4.11322 13.291L2.79487 14.4375C2.43387 14.7515 2.34688 15.2784 2.58588 15.6934L4.09369 18.3066C4.33269 18.7216 4.8321 18.9089 5.2851 18.7539L6.92963 18.1875C7.59583 18.7342 8.35534 19.1663 9.17572 19.4766L9.50971 21.1914C9.60171 21.6614 10.0112 22 10.4902 22H13.5097C13.9887 22 14.3982 21.6614 14.4902 21.1914L14.8242 19.4766C15.6449 19.1662 16.4038 18.7326 17.0703 18.1855L18.7148 18.752C19.1678 18.908 19.6662 18.7216 19.9062 18.3066L21.414 15.6914C21.653 15.2764 21.566 14.7515 21.205 14.4375L19.8867 13.291C19.9552 12.8697 19.9999 12.4407 19.9999 12C19.9999 11.5593 19.9552 11.1303 19.8867 10.709L21.205 9.5625C21.566 9.2485 21.653 8.72164 21.414 8.30664L19.9062 5.69336C19.6672 5.27836 19.1678 5.09109 18.7148 5.24609L17.0703 5.8125C16.4041 5.26579 15.6446 4.83366 14.8242 4.52344L14.4902 2.80859C14.3982 2.33859 13.9887 2 13.5097 2H10.4902ZM11.9999 8C14.2089 8 15.9999 9.791 15.9999 12C15.9999 14.209 14.2089 16 11.9999 16C9.79094 16 7.99994 14.209 7.99994 12C7.99994 9.791 9.79094 8 11.9999 8Z"
        fill={color}
      />
    </Svg>
  );
};

export default CogIcon;