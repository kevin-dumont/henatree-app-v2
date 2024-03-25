import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { IconProps } from '@components/atoms/Icons';
import { COLORS, MARGINS } from '@constants/theme';

export interface CircleButtonProps {
  Icon: FunctionComponent<IconProps>;
  isFocused: boolean;
  label: string;
  name: string;
  onPress: () => void;
}

const CircleButton = ({
  Icon,
  isFocused,
  label,
  name,
  onPress,
}: CircleButtonProps) => (
  <TouchableOpacity
    accessibilityRole="button"
    accessibilityState={isFocused ? { selected: true } : {}}
    accessibilityLabel={label}
    testID={name}
    onPress={onPress}
    style={styles.button}>
    <Icon color={COLORS.neutral.white} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 100,
    backgroundColor: COLORS.sea.dark,
    width: 40,
    height: 40,
    marginTop: MARGINS.S,
    marginHorizontal: MARGINS.S,
  },
});

export default CircleButton;
