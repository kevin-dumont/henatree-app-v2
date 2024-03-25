import React, { ReactNode, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { BaseStylesProps } from '@typings/styles';

type AlignLeftProps = {
  left: true;
  center?: undefined;
  right?: undefined;
};

type AlignRightProps = {
  right: true;
  left?: undefined;
  center?: undefined;
};

type AlignCenterProps = {
  center: true;
  left?: undefined;
  right?: undefined;
};

type AlignValues = 'center' | 'left' | 'right';

type AlignTuple = [AlignValues, true];

export type AlignProps = BaseStylesProps &
  (AlignLeftProps | AlignRightProps | AlignCenterProps) & {
    children: ReactNode;
  };

const Align = ({
  children,
  left,
  right,
  center,
  style,
  ...props
}: AlignProps) => {
  const key = useMemo(() => {
    const entries = Object.entries({ left, right, center });
    const [i] = entries.find(([, value]) => value) as AlignTuple;

    return i;
  }, [left, right, center]);

  return (
    <View {...props} style={[style, styles.align, styles[key]]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  align: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  left: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
});

export default Align;
