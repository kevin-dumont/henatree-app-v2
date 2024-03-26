import React from 'react';
import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/theme';
import CenterView from '@/components/UI/atoms/CenterView';
import AnimatedLogo from '@/components/UI/atoms/AnimatedLogo';

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
