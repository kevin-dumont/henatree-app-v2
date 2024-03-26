import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { IconProps } from '@/components/UI/atoms/Icons';
import Text from '@/components/UI/atoms/Text';
import { COLORS, MARGINS } from '@/constants/theme';

export interface TabBarItemProps {
  Icon: FunctionComponent<IconProps>;
  isFocused: boolean;
  label: string;
  name: string;
  onPress: () => void;
}

const TabBarItem = ({
  Icon,
  isFocused,
  label,
  name,
  onPress,
}: TabBarItemProps) => (
  <TouchableOpacity
    accessibilityRole="button"
    accessibilityState={isFocused ? { selected: true } : {}}
    accessibilityLabel={label}
    testID={name}
    onPress={onPress}
    style={styles.button}>
    <Icon color={isFocused ? COLORS.sea.dark : COLORS.sea.lightest} />
    <Text
      fontSize={10}
      bold={isFocused}
      color={isFocused ? COLORS.sea.dark : COLORS.neutral.gray4}
      style={styles.buttonText}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: MARGINS.S,
  },
  buttonText: {
    paddingTop: MARGINS.XXS,
  },
});

export default TabBarItem;
