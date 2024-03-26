import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { BaseStylesProps, Styles } from '@/types/styles';

interface CenterViewProps extends BaseStylesProps {
  children: ReactNode;
  style?: Styles;
}

const CenterView = ({ children, style }: CenterViewProps) => {
  return <View style={[styles.view, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CenterView;
