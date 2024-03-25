import React from 'react';
import { StyleSheet } from 'react-native';

import { COLORS } from '@constants/theme';
import CenterView from '@components/atoms/CenterView';
import AnimatedLogo from '@components/atoms/AnimatedLogo';

const SplashScreen = () => {
  return (
    <CenterView style={styles.background}>
      <AnimatedLogo />
    </CenterView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.yellow.base,
  },
});

export default SplashScreen;
