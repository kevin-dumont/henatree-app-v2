import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { BaseStylesProps, Styles } from '@/types/styles';

interface CenterProps extends BaseStylesProps {
  children: ReactNode;
  horizontal?: boolean;
  vertical?: boolean;
  style?: Styles;
}

const Center = ({
  children,
  style,
  horizontal = true,
  vertical = false,
}: CenterProps) => {
  return (
    <View
      style={[
        horizontal && styles.horizontal,
        vertical && styles.vertical,
        style,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    width: '100%',
    alignItems: 'center',
  },
  vertical: {
    justifyContent: 'center',
  },
});

export default Center;
