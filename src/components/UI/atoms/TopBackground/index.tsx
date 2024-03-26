import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '@/constants/theme';
import { BaseStylesProps } from '@/types/styles';

type TopBackgroundProps = BaseStylesProps & {
  color?: string;
  children: ReactNode;
};

const TopBackground = ({
  color = COLORS.yellow.base,
  children,
  ...props
}: TopBackgroundProps) => {
  return (
    <View style={styles(color).color} {...props}>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

const styles = (color: string) =>
  StyleSheet.create({
    color: {
      backgroundColor: color,
    },
  });

export default TopBackground;
