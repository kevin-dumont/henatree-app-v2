import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { BaseStylesProps } from '@/types/styles';

export type AllowedStyles = {
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
};

export type PadderProps = BaseStylesProps & AllowedStyles;

const Padder = ({
  children,
  style,
  ...rest
}: PropsWithChildren<PadderProps>) => {
  return <View style={[styles(rest).padder, style]}>{children}</View>;
};

const styles = (style: AllowedStyles) => StyleSheet.create({ padder: style });

export default Padder;
