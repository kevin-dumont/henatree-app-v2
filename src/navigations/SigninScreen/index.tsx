import React, { useCallback } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, MARGINS } from '@constants/theme';
import Logo from '@components/atoms/Logo';
import Button from '@components/molecules/Button';
import Text from '@components/atoms/Text';
import Padder from '@components/atoms/Padder';
import Center from '@components/atoms/Center';
import Separator from '@components/atoms/Separator';
import RoundedTop from '@components/atoms/RoundedTop';
import BgImage from '@assets/images/bg_login.png';
import { AuthNavigationProp } from '@typings/navigations';

const SignUpScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const onSignUpClick = useCallback(() => {
    navigation.navigate('SignUpForm');
  }, []);

  return (
    <>
      <ImageBackground style={styles.imgBg} source={BgImage} />
      <RoundedTop>
        <Center>
          <Padder marginTop={40}>
            <Logo height={43} />
          </Padder>
          <Padder marginTop={MARGINS.S} marginBottom={MARGINS.XXL}>
            <Text centered lineHeight={24}>
              Enfin une solution pour faire {'\n'} des rencontres 100% amicales
              😻
            </Text>
          </Padder>
        </Center>

        <Button variant="secondary" onPress={onSignUpClick}>
          S'inscrire
        </Button>

        <Padder marginVertical={MARGINS.XXL}>
          <Center>
            <Separator>OU</Separator>
            <Padder marginTop={MARGINS.L}>
              <Text>
                Tu as déjà un compte ?{' '}
                <Text
                  onPress={() => navigation.navigate('Login')}
                  color={COLORS.sea.dark}>
                  Je me connecte
                </Text>
              </Text>
            </Padder>
          </Center>
        </Padder>
      </RoundedTop>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  imgBg: {
    width: '100%',
    height: 454,
  },
});
