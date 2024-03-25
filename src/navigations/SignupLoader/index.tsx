import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

import Text from '@components/atoms/Text';
import CenterView from '@components/atoms/CenterView';
import { COLORS, FONTS, MARGINS } from '@constants/theme';
import Loader from '@components/atoms/Loader';
import Padder from '@components/atoms/Padder';
import { useTimeouts } from '@hooks/useTimeouts';
import { AuthNavigationProp } from '@typings/navigations';

const PROGRESS_TIMEOUTS = [
  [0.1, 100],
  [0.27, 600],
  [0.48, 1000],
  [0.57, 1500],
  [0.89, 2000],
  [0.92, 2500],
  [1, 3000],
];

const SignUpLoader = () => {
  const [progress, setProgress] = useState(0);
  const [addTimeout, clearTimeouts] = useTimeouts();

  const navigation = useNavigation<AuthNavigationProp>();

  useEffect(() => {
    PROGRESS_TIMEOUTS.forEach(([percent, time]) =>
      addTimeout(() => setProgress(percent), time),
    );

    addTimeout(() => navigation.navigate('SetupProfile'), 3300);

    return clearTimeouts;
  }, []);

  return (
    <>
      <View style={styles.text}>
        <Padder marginRight={MARGINS.XS}>
          <Loader />
        </Padder>
        <Text fontSize={18} light>
          Création de votre profil
        </Text>
      </View>
      <CenterView>
        <Progress.Circle
          size={180}
          progress={progress}
          borderWidth={0}
          color={COLORS.yellow.base}
          showsText
          textStyle={styles.percentage}
          unfilledColor={COLORS.neutral.gray2}
          thickness={5}
        />
      </CenterView>
    </>
  );
};

const styles = StyleSheet.create({
  percentage: {
    fontFamily: FONTS.bold,
    color: COLORS.neutral.gray5,
    fontSize: 24,
  },
  text: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 55,
    left: 0,
    right: 10,
  },
});

export default SignUpLoader;
