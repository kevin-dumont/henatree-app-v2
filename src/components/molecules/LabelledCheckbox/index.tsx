import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import Checkbox from '@components/atoms/Checkbox';
import Text from '@components/atoms/Text';
import { MARGINS } from '@constants/theme';

export interface LabelledCheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const LabelledCheckbox = ({
  value,
  onChange,
  children,
}: PropsWithChildren<LabelledCheckboxProps>) => {
  return (
    <View style={styles.container}>
      <Checkbox onChange={onChange} value={value} />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: MARGINS.XL,
  },
  text: {
    flexDirection: 'row',
    marginLeft: MARGINS.L,
  },
});

export default LabelledCheckbox;
