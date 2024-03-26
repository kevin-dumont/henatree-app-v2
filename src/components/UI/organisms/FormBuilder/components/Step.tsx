import React, { useCallback, PropsWithChildren } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TopBar from '@/components/UI/molecules/TopBar';
import Text from '@/components/UI/atoms/Text';
import Container from '@/components/UI/atoms/Container';
import Title from '@/components/UI/atoms/Title';
import { InternalStepProps } from '@/components/UI/organisms/FormBuilder/types/types';
import CircleButton from '@/components/UI/molecules/CircleButton';
import ArrowRightIcon from '@/components/UI/atoms/Icons/ArrowRightIcon';
import { COLORS, MARGINS } from '@/constants/theme';
import Padder from '@/components/UI/atoms/Padder';
import { isNotUndefined } from '@/services/isNotUndefined';

export const Step = <K extends string, V>({
  prevStep,
  nextStep,
  index,
  stepCount,
  helperText,
  title,
  children,
  onComplete,
  name,
  value,
  setValue,
  validate,
  onNextStepClick,
  showBackButton = true,
}: PropsWithChildren<InternalStepProps<K, V>>) => {
  const navigation = useNavigation<Record<string, any>>();

  const onNextClick = useCallback(() => {
    setValue(value);

    if (validate && !validate(value)) {
      return;
    }

    if (onNextStepClick) {
      onNextStepClick(() => navigation.navigate(nextStep));
    } else {
      if (isNotUndefined(nextStep)) {
        navigation.navigate(nextStep);
      }
    }

    onComplete?.({ name, value });
  }, [nextStep, onNextStepClick, value, validate]);

  const onPrevClick = useCallback(() => {
    if (prevStep) {
      navigation.navigate(prevStep);
    } else {
      navigation.goBack();
    }
  }, [prevStep]);

  const hasNextButton = nextStep || !!onNextStepClick;

  return (
    <>
      <KeyboardAvoidingView style={styles.buttonContainer} behavior="height">
        <SafeAreaView>
          <Container>
            <TopBar prev={showBackButton ? onPrevClick : undefined}>
              <Text>
                Étape {index}/{stepCount}
              </Text>
            </TopBar>
            <Title>{title}</Title>
            <Padder marginTop={MARGINS.S} marginBottom={MARGINS.XXL}>
              <Text light>{helperText}</Text>
            </Padder>
            {children}
          </Container>
        </SafeAreaView>

        {hasNextButton && (
          <CircleButton style={styles.button} onPress={onNextClick}>
            <ArrowRightIcon size={27} color={COLORS.neutral.white} />
          </CircleButton>
        )}
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: MARGINS.L,
    right: MARGINS.L,
  },
});
