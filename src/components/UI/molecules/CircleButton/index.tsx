import React, { memo, ReactNode } from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { BaseStylesProps } from '@/types/styles';
import { BORDER_RADIUS, COLORS } from '@/constants/theme';

export type CircleButtonProps = TouchableOpacityProps &
  BaseStylesProps & {
    children: ReactNode;
    withBorder?: boolean;
    size?: number;
  };

const CircleButton = ({
  children,
  style,
  withBorder = true,
  size = 66,
  ...props
}: CircleButtonProps) => {
  const borderStyle = withBorder ? styles.withBorder : [];

  return (
    <TouchableOpacity
      style={[
        styles.circleButton,
        borderStyle,
        style,
        { width: size, height: size },
      ]}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS.CIRCLE,
    backgroundColor: COLORS.yellow.base,
  },
  withBorder: {
    borderWidth: 6,
    borderColor: COLORS.yellow.light,
  },
});

export default memo(CircleButton);
