import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import { COLORS, MARGINS } from '@/constants/theme';
import HangoutList from '@/components/UI/organisms/HangoutList';
import ThemeList from '@/components/business/ThemeList';
import ExploreHeader from '@/components/business/ExploreHeader';

const ExploreScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.safeAreaView}>
          <ExploreHeader />

          <View style={styles.content}>
            <ThemeList />
            <HangoutList title="Les sorties à la une" />
            <HangoutList title="Les sorties de tes potes" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: COLORS.yellow.base,
  },
  content: {
    backgroundColor: COLORS.neutral.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    marginTop: -MARGINS.XL,
    paddingTop: MARGINS.XXL,
  },
  hangoutTitleContainer: {
    marginTop: MARGINS.L,
    marginBottom: MARGINS.M,
  },
  hangoutScrollView: {
    paddingLeft: MARGINS.XL,
  },
  buttonShowMore: {
    marginTop: MARGINS.XL,
  },
});

export default ExploreScreen;
