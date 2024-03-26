import React, { useCallback } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BgImage from '@assets/images/bg_login.png';
import { COLORS, MARGINS } from '@/constants/theme';
import Logo from '@/components/UI/atoms/Logo';
import Button from '@/components/UI/molecules/Button';
import Text from '@/components/UI/atoms/Text';
import Padder from '@/components/UI/atoms/Padder';
import Center from '@/components/UI/atoms/Center';
import Separator from '@/components/UI/atoms/Separator';
import RoundedTop from '@/components/UI/atoms/RoundedTop';
import { AuthNavigationProp } from '@/types/navigations';

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
