import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import Text from '@components/atoms/Text';
import { FormBuilderTextProps } from '@components/organisms/FormBuilder/types';
import { COLORS, FONTS, MARGINS } from '@constants/theme';
import Padder from '@components/atoms/Padder';

const TextField = <K extends string, V extends string>({
  value,
  setValue,
  error,
  ...props
}: FormBuilderTextProps<K, V>) => {
  return (
    <>
      <TextInput
        {...props}
        selectionColor={COLORS.yellow.base}
        placeholderTextColor={COLORS.neutral.gray4}
        autoFocus={true}
        style={styles.textField}
        value={value as string}
        onChangeText={(v) => setValue(v as V)}
      />
      {error && (
        <Padder marginTop={MARGINS.M}>
          <Text fontSize={14} color={COLORS.orange.base}>
            {error}
          </Text>
        </Padder>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textField: {
    fontFamily: FONTS.light,
    fontSize: 20,
  },
});

export default TextField;
