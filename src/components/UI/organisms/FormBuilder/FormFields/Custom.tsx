import React from 'react';

import { FormBuilderCustomProps } from '@/components/UI/organisms/FormBuilder/types/types';

const Custom = <K extends string, V>({
  component,
  setValue,
  value,
  error,
}: FormBuilderCustomProps<K, V>) => (
  <>{component({ value, setValue, error })}</>
);

export default Custom;
