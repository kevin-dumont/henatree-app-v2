import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS, MARGINS } from '@/constants/theme';

import Text from '../Text';
import Center from '../Center';

type SeparatorProps = {
  children: ReactNode;
};

const Separator = ({ children }: SeparatorProps) => {
  return (
    <Center>
      <View style={styles.line} />
      {!!children && (
        <Text style={styles.text} fontSize={12}>
          {children}
        </Text>
      )}
    </Center>
  );
};

export default Separator;

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.neutral.gray3,
  },
  text: {
    paddingHorizontal: 7,
    color: COLORS.neutral.gray4,
    backgroundColor: COLORS.neutral.white,
    marginTop: -MARGINS.S,
  },
});
