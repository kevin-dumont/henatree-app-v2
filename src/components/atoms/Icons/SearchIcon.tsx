import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '@constants/theme';

import { IconProps } from '.';

const SearchIcon = ({ color = COLORS.sea.dark, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.4 2.30004C5.93599 2.30004 2.30002 5.93601 2.30002 10.4C2.30002 14.8641 5.93599 18.5 10.4 18.5C12.3089 18.5 14.0646 17.8334 15.4508 16.7235L20.1623 21.4349C20.1625 21.4352 20.1628 21.4354 20.163 21.4357C20.2458 21.5217 20.3449 21.5904 20.4544 21.6378C20.5644 21.6853 20.6826 21.7104 20.8024 21.7116C20.9221 21.7128 21.0409 21.6901 21.1517 21.6449C21.2626 21.5996 21.3633 21.5327 21.448 21.448C21.5327 21.3633 21.5996 21.2626 21.6448 21.1518C21.6901 21.0409 21.7128 20.9221 21.7116 20.8024C21.7104 20.6827 21.6853 20.5644 21.6377 20.4545C21.5904 20.3449 21.5217 20.2458 21.4357 20.163C21.4354 20.1628 21.4352 20.1625 21.4349 20.1623L16.7235 15.4508C17.8334 14.0646 18.5 12.3089 18.5 10.4C18.5 5.93601 14.8641 2.30004 10.4 2.30004ZM10.4 4.10004C13.8889 4.10004 16.7 6.91117 16.7 10.4C16.7 13.8889 13.8889 16.7 10.4 16.7C6.91115 16.7 4.10002 13.8889 4.10002 10.4C4.10002 6.91117 6.91115 4.10004 10.4 4.10004Z"
        fill={color}
      />
    </Svg>
  );
};

export default SearchIcon;
