import React, { memo, PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import ChevronLeftIcon from '@components/atoms/Icons/ChevronLeftIcon';
import ChevronRightIcon from '@components/atoms/Icons/ChevronRightIcon';
import Padder from '@components/atoms/Padder';
import { MARGINS } from '@constants/theme';

export type TopBarProps = {
  prev?: () => void;
  next?: () => void;
  paddingTop?: number;
  paddingBottom?: number;
};

const TopBar = ({
  prev,
  next,
  children,
  paddingTop = MARGINS.S,
  paddingBottom = MARGINS.XL,
}: PropsWithChildren<TopBarProps>) => (
  <Padder paddingTop={paddingTop} paddingBottom={paddingBottom}>
    <View style={styles.container}>
      <View style={styles.arrow}>
        {prev && (
          <TouchableOpacity onPress={prev}>
            <ChevronLeftIcon />
          </TouchableOpacity>
        )}
      </View>
      <View>{children}</View>
      <View style={styles.arrow}>
        {next && (
          <TouchableOpacity onPress={next}>
            <ChevronRightIcon />
          </TouchableOpacity>
        )}
      </View>
    </View>
  </Padder>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrow: {
    width: 24, // Icons size
  },
});

export default memo(TopBar);
