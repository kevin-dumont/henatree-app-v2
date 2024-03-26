import React, { memo, ReactNode } from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import { FONTS, THEME } from '@/constants/theme';
import { BaseStylesProps } from '@/types/styles';

interface TitleBaseProps extends BaseStylesProps {
  children: ReactNode;
  fontSize?: number;
  color?: string;
  lineHeight?: number;
  centered?: boolean;
  underlined?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
}

interface TitleLightProps extends TitleBaseProps {
  light?: boolean;
  bold?: undefined;
}

interface TitleBoldProps extends TitleBaseProps {
  bold?: boolean;
  light?: undefined;
}

type StylesParamsProps = {
  bold: boolean;
  light: boolean;
  fontSize: number;
  color: string;
  lineHeight: number;
  underlined: boolean;
  centered: boolean;
};

export type TitleProps = TitleBoldProps | TitleLightProps;

const Text = ({
  children,
  style,
  fontSize = 16,
  lineHeight = 20,
  color = THEME.text.color,
  light = false,
  bold = false,
  underlined = false,
  centered = false,
  ...props
}: TitleProps) => (
  <NativeText
    {...props}
    style={[
      styles({ bold, light, fontSize, color, lineHeight, underlined, centered })
        .text,
      style,
    ]}>
    {children}
  </NativeText>
);

const styles = ({
  bold,
  light,
  fontSize,
  color,
  lineHeight,
  underlined,
  centered,
}: StylesParamsProps) =>
  StyleSheet.create({
    text: {
      color,
      fontSize,
      lineHeight,
      textDecorationLine: underlined ? 'underline' : 'none',
      textAlign: centered ? 'center' : 'left',
      fontFamily:
        (bold && FONTS.bold) || (light && FONTS.light) || FONTS.medium,
    },
  });

export default memo(Text);
