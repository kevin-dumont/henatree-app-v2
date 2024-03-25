import React, { useCallback } from 'react';

import { FormBuilderCustomComponentProps } from '@components/organisms/FormBuilder/types';
import LabelledCheckbox from '@components/molecules/LabelledCheckbox';
import Text from '@components/atoms/Text';
import { COLORS, MARGINS } from '@constants/theme';
import Padder from '@components/atoms/Padder';

export interface LegalConsent {
  conditions: boolean;
  gdpr: boolean;
}

const LegalFormStep = <K extends string, V extends LegalConsent>({
  setValue,
  value,
  error,
}: FormBuilderCustomComponentProps<K, V>) => {
  const setCondition = useCallback(
    (conditions: boolean) =>
      setValue({
        ...value,
        conditions,
      }),
    [setValue, value],
  );

  const setGdpr = useCallback(
    (gdpr: boolean) =>
      setValue({
        ...value,
        gdpr,
      }),
    [setValue, value],
  );

  return (
    <>
      <LabelledCheckbox onChange={setCondition} value={value.conditions}>
        En cochant cette case, vous déclarez{'\n'}
        être d’accord avec nos{' '}
        <Text color={COLORS.sea.dark}>
          conditions{'\n'}
          d’utilisation.
        </Text>
      </LabelledCheckbox>
      <LabelledCheckbox onChange={setGdpr} value={value.gdpr}>
        En cochant cette case, vous déclarez{'\n'}
        être d’accord avec notre{' '}
        <Text color={COLORS.sea.dark}>
          politique{'\n'}
          générale de protection des données.
        </Text>
      </LabelledCheckbox>

      {error && (
        <Padder marginTop={MARGINS.S}>
          <Text fontSize={14} color={COLORS.orange.base}>
            {error}
          </Text>
        </Padder>
      )}
    </>
  );
};

export default LegalFormStep;
