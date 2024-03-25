import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import Container from '@components/atoms/Container';
import { COLORS, MARGINS } from '@constants/theme';
import Center from '@components/atoms/Center';
import Padder from '@components/atoms/Padder';
import TextField from '@components/molecules/TextField';
import Button from '@components/molecules/Button';
import TopBackground from '@components/atoms/TopBackground';
import Separator from '@components/atoms/Separator';
import RoundedTop from '@components/atoms/RoundedTop';
import Text from '@components/atoms/Text';
import FacebookIcon from '@components/atoms/Icons/FacebookIcon';
import GoogleIcon from '@components/atoms/Icons/GoogleIcon';
import TopBar from '@components/molecules/TopBar';
import Title from '@components/atoms/Title';

const LoginScreen = () => {
  const navigation = useNavigation();

  const onBackClick = useCallback(() => {
    navigation.navigate('Signup');
  }, []);

  return (
    <>
      <TopBackground>
        <Container>
          <TopBar paddingTop={44} prev={onBackClick}>
            <Title>Connexion</Title>
          </TopBar>
          <TextField placeholder="Email" />
          <Padder marginTop={MARGINS.M} marginBottom={MARGINS.XL}>
            <TextField secureTextEntry placeholder="Mot de passe" />
          </Padder>
          <Padder marginBottom={MARGINS.XL}>
            <Button variant="secondary">Se connecter</Button>
          </Padder>
        </Container>
      </TopBackground>
      <RoundedTop style={styles.bottom}>
        <Padder paddingVertical={MARGINS.XXL}>
          <Separator>OU</Separator>
          <Padder marginTop={MARGINS.XL} marginBottom={MARGINS.M}>
            <Button
              variant="tertiary"
              appearance="lined"
              bold={false}
              before={<FacebookIcon />}
              center={false}>
              Se connecter avec Facebook
            </Button>
          </Padder>
          <Button
            variant="tertiary"
            appearance="lined"
            bold={false}
            before={<GoogleIcon />}
            center={false}>
            Se connecter avec Google
          </Button>
        </Padder>
        <SafeAreaView>
          <Center>
            <Text>
              Je ne suis pas inscrit,{' '}
              <Text underlined color={COLORS.sea.dark} onPress={onBackClick}>
                créer mon compte
              </Text>
            </Text>
          </Center>
        </SafeAreaView>
      </RoundedTop>
    </>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default LoginScreen;
