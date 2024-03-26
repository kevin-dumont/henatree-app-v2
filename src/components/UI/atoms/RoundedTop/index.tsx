import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

import Container from '@/components/UI/atoms/Container';
import { BORDER_RADIUS, MARGINS } from '@/constants/theme';
import { BaseStylesProps } from '@/types/styles';

type RoundedTopProps = BaseStylesProps & {
  borderRadius?: number;
  children: ReactNode;
};

const RoundedTop = ({
  borderRadius = BORDER_RADIUS.IMPORTANT,
  children,
  ...props
}: RoundedTopProps) => {
  return (
    <Container style={styles(borderRadius).block} {...props}>
      {children}
    </Container>
  );
};

const styles = (borderRadius: number) =>
  StyleSheet.create({
    block: {
      borderTopRightRadius: borderRadius,
      borderTopLeftRadius: borderRadius,
      backgroundColor: 'white',
      marginTop: -MARGINS.L,
    },
  });

export default RoundedTop;
