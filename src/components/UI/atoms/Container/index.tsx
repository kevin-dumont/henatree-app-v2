import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

import { BaseStylesProps } from '@/types/styles';
import { MARGINS } from '@/constants/theme';

export interface ContainerProps extends BaseStylesProps {
  children: ReactNode;
}

const Container = ({ children, style }: ContainerProps) => {
  return <View style={[styles.view, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: MARGINS.XL,
  },
});

export default Container;
