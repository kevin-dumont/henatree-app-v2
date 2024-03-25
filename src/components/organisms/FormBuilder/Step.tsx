import React, { useCallback, PropsWithChildren } from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import R from 'ramda';
import _ from 'lodash';

import TopBar from '@components/molecules/TopBar';
import Text from '@components/atoms/Text';
import Container from '@components/atoms/Container';
import Title from '@components/atoms/Title';
import { InternalStepProps } from '@components/organisms/FormBuilder/types';
import CircleButton from '@components/molecules/CircleButton';
import ArrowRightIcon from '@components/atoms/Icons/ArrowRightIcon';
import { COLORS, MARGINS } from '@constants/theme';
import Padder from '@components/atoms/Padder';

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
  const navigation = useNavigation();

  type Nav = ReturnType<NavigationProp<ParamListBase>['navigate']>;

  const onNextClick = useCallback(() => {
    setValue(value);

    if (validate && !validate(value)) {
      return;
    }

    const navigate = R.when<K | undefined, Nav>(
      R.pipe(_.isUndefined, R.not),
      navigation.navigate,
    );

    if (onNextStepClick) {
      onNextStepClick(R.always(navigate(nextStep)));
    } else {
      navigate(nextStep);
    }

    onComplete?.({ name, value });
  }, [nextStep, onNextStepClick, value, validate]);

  const onPrevClick = useCallback(() => {
    const goBack = R.ifElse(R.not, navigation.goBack, navigation.navigate);
    goBack(prevStep);
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
