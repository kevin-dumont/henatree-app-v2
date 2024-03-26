import React, { ReactNode } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from 'react-native';

import { BORDER_RADIUS, MARGINS } from '@/constants/theme';
import Text from '@/components/UI/atoms/Text';
import { BaseStylesProps } from '@/types/styles';

import { BUTTON_THEME } from './theme';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonAppearance = 'lined' | 'filled';
export type ButtonSize = 's' | 'm' | 'l';

export type ButtonBaseProps = TouchableHighlightProps &
  BaseStylesProps & {
    children: ReactNode;
    variant?: ButtonVariant;
    appearance?: ButtonAppearance;
    before?: ReactNode;
    after?: ReactNode;
    center?: boolean;
    rounded?: boolean;
    size?: ButtonSize;
  };

export type ButtonBold = ButtonBaseProps & {
  bold: true;
};

export type ButtonLight = ButtonBaseProps & {
  bold?: false;
};

export type ButtonProps = ButtonBold | ButtonLight;

const Button = ({
  children,
  variant = 'primary',
  appearance = 'filled',
  before,
  after,
  style,
  center = true,
  rounded = true,
  bold = true,
  size = 'm',
  ...props
}: ButtonProps) => {
  const computedStyles = styles(variant, appearance, rounded, bold, size);

  return (
    <TouchableHighlight
      underlayColor={BUTTON_THEME[variant][appearance].buttonActiveColor}
      style={[style, computedStyles.button, center && computedStyles.center]}
      {...props}>
      <>
        {before && <View style={computedStyles.before}>{before}</View>}
        <Text style={computedStyles.text}>{children}</Text>
        {after && <View style={computedStyles.after}>{after}</View>}
      </>
    </TouchableHighlight>
  );
};

const styles = (
  variant: ButtonVariant,
  appearance: ButtonAppearance,
  rounded: boolean,
  bold: boolean,
  size: ButtonSize,
) =>
  StyleSheet.create({
    button: {
      borderRadius: rounded ? BORDER_RADIUS.MEDIUM : 0,
      paddingHorizontal: MARGINS.XL,
      paddingVertical: MARGINS.M,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      ...BUTTON_THEME[variant][appearance].button,
    },
    center: {
      justifyContent: 'center',
    },
    text: {
      textAlign: 'center',
      ...BUTTON_THEME[variant][appearance].text,
      fontFamily: bold ? BUTTON_THEME.font.bold : BUTTON_THEME.font.light,
      fontSize: BUTTON_THEME.size[size],
    },
    before: {
      marginRight: MARGINS.XS,
    },
    after: {
      marginLeft: MARGINS.XS,
    },
  });

export default Button;
