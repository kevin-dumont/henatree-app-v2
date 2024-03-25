import React from 'react';

import Button from '@components/molecules/Button';
import { isUndefined } from '@services/isUndefined';

import { FormBuilderChoiceProps } from '../types/types';

const Choice = <K extends string, V extends string>(
  props: FormBuilderChoiceProps<K, V>,
) => {
  const handlePress = (v: V) => {
    if (!props.multiple) {
      return props.setValue(v);
    }

    if (isUndefined(props.value)) {
      return props.setValue([v]);
    }

    props.setValue(
      props.value.includes(v)
        ? props.value.filter((x) => x !== v)
        : [...props.value, v],
    );
  };

  const isActive = (v: V): boolean => {
    if (!props.value) {
      return false;
    }
    return props.multiple ? props.value.includes(v) : props.value === v;
  };

  return (
    <>
      {props.choices.map(({ id, value: v }) => (
        <Button
          key={id}
          onPress={() => handlePress(v)}
          variant={isActive(v) ? 'primary' : 'tertiary'}>
          test
        </Button>
      ))}
    </>
  );
};

export default Choice;
