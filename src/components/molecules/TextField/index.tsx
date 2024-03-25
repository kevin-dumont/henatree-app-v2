import React, { Ref, forwardRef } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import { FONTS, MARGINS, SHADOW, THEME } from '@constants/theme';
import { BaseStylesProps } from '@typings/styles';

type TextFieldVariant = 'light' | 'dark';

export type TextFieldProps = TextInputProps &
  BaseStylesProps & {
    variant?: TextFieldVariant;
  };

const TextField = (
  { variant = 'light', ...props }: TextFieldProps,
  ref: Ref<TextInput>,
) => {
  return <TextInput style={styles(variant).textField} {...props} ref={ref} />;
};

const styles = (variant: TextFieldVariant) =>
  StyleSheet.create({
    textField: {
      ...SHADOW,
      fontFamily: FONTS.light,
      width: '100%',
      height: 48,
      paddingHorizontal: MARGINS.L,
      borderRadius: 8,
      fontSize: 16,
      ...THEME.textfield[variant],
    },
  });

export default forwardRef(TextField);
