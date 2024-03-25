import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { TextInputProps } from 'react-native';

import { KeyOf } from '@typings/utils';

export type ValidationResultError = {
  isValid: false;
  type: KeyOf<FormRule<any>>;
};

export type ValidationResultValid = {
  isValid: true;
  type?: undefined;
};

export type ValidationResult = ValidationResultError | ValidationResultValid;

export type FormRule<V> = {
  required?: boolean;
  pattern?: RegExp;
  validate?: (field: V) => boolean;
};

export type FormErrorMessages =
  | Partial<Record<KeyOf<FormRule<any>>, string>>
  | string;

export type UseFormRequireConfig<V> = {
  rules: FormRule<V>;
  messages?: FormErrorMessages;
};

export type OnCompleteParams<K, V> = (params: { name: K; value: V }) => void;

export type StepProps<K extends string, V> = {
  name: K;
  title: string;
  helperText?: ReactNode;
  error?: string;
  rules?: FormRule<V>;
  onComplete?: OnCompleteParams<K, V>;
  onNextStepClick?: (onDefaultNextStepClick: () => void) => void;
  value: V;
  setValue: (value: V) => void;
  validate?: (value: V) => boolean;
  showBackButton?: boolean;
};

export type InternalStepProps<K extends string, V> = StepProps<K, V> & {
  nextStep?: K;
  prevStep?: K;
  stepCount: number;
  index: number;
};

export type FormBuilderTextProps<K extends string, V> = StepProps<K, V> &
  TextInputProps & {
    placeholder?: string;
    value?: V;
  };

export type Choice<V> = {
  id: string;
  value: V;
  label?: ReactNode;
  layout: 'line' | 'square';
};

export type BaseChoiceProps<V> = {
  choices: Choice<V>[];
};

export type FormBuilderMultipleChoiceProps<K extends string, V> = Omit<
  StepProps<K, V>,
  'value' | 'setValue'
> &
  BaseChoiceProps<V> & {
    value?: V[];
    setValue: (value: V[]) => void;
    multiple: true;
  };

export type FormBuilderSingleChoiceProps<K extends string, V> = StepProps<
  K,
  V
> &
  BaseChoiceProps<V> & {
    multiple?: false;
  };

export type FormBuilderChoiceProps<K extends string, V> =
  | FormBuilderMultipleChoiceProps<K, V>
  | FormBuilderSingleChoiceProps<K, V>;

export type FormBuilderDateProps<K extends string, V> = StepProps<K, V> & {
  placeholder?: string;
  datePickerHeaderText?: string;
  dateFormat?: Intl.DateTimeFormatOptions;
};

export type FormBuilderCustomComponentProps<K extends string, V> = Pick<
  StepProps<K, V>,
  'value' | 'setValue' | 'error'
>;

export type FormBuilderCustomProps<K extends string, V> = StepProps<K, V> &
  PropsWithChildren<{
    component: (_props: FormBuilderCustomComponentProps<K, V>) => ReactNode;
  }>;

export type FormBuilderStepProps<K extends string, V> =
  | FormBuilderTextProps<K, V>
  | FormBuilderDateProps<K, V>
  | FormBuilderCustomProps<K, V>;

export type FormBuilderProps<K extends string, V> = {
  children: ReactElement<FormBuilderStepProps<K, V>>[];
};

export type UseFormBuilderParams<L extends Record<string, any>> = {
  defaultValues?: Partial<L>;
};
