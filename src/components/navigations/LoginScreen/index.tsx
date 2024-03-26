import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import Container from '@/components/UI/atoms/Container';
import { COLORS, MARGINS } from '@/constants/theme';
import Center from '@/components/UI/atoms/Center';
import Padder from '@/components/UI/atoms/Padder';
import TextField from '@/components/UI/molecules/TextField';
import Button from '@/components/UI/molecules/Button';
import TopBackground from '@/components/UI/atoms/TopBackground';
import Separator from '@/components/UI/atoms/Separator';
import RoundedTop from '@/components/UI/atoms/RoundedTop';
import Text from '@/components/UI/atoms/Text';
import FacebookIcon from '@/components/UI/atoms/Icons/FacebookIcon';
import GoogleIcon from '@/components/UI/atoms/Icons/GoogleIcon';
import TopBar from '@/components/UI/molecules/TopBar';
import Title from '@/components/UI/atoms/Title';
import { AuthNavigationProp } from '@/types/navigations';

const LoginScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const onBackClick = useCallback(() => {
    navigation.navigate('SignUp');
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
