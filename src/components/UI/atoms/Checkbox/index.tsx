import React, { useCallback } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';

import CheckMark from '@/components/UI/atoms/Icons/CheckMark';
import { COLORS } from '@/constants/theme';

export interface CheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox = ({ value, onChange }: CheckboxProps) => {
  const handlePress = useCallback(() => onChange?.(!value), [onChange, value]);

  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.checkbox, value && styles.active]}>
        {value && <CheckMark size={20} color={COLORS.neutral.white} />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.sea.lightest,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  active: {
    borderColor: COLORS.sea.dark,
    backgroundColor: COLORS.sea.dark,
  },
});

export default Checkbox;
