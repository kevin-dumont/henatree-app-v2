import { Dispatch } from 'react';

import { isNotUndefined } from '@services/isNotUndefined';
import { KeyOf } from '@typings/utils';

import {
  Action,
  setError,
  setField,
  setValidated,
  State,
} from '../hooks/store';
import { UseFormRequireConfig } from '../types/types';

import { validate } from './validate';
import { getErrorMessage } from './getErrorMessage';

/**
 * Getting props for form validation handling of FormBuilder steps
 *
 * @param state Form state of the useFormBuilder hook
 * @param dispatch Action dispatcher of the FormBuilder hook
 * @returns FormBuilder step props to handle form validation
 */
export const registerField =
  <L extends Record<string, any>>(
    state: State<KeyOf<L>>,
    dispatch: Dispatch<Action>,
  ) =>
  <T extends KeyOf<L>>(name: T, config?: UseFormRequireConfig<L[T]>) => {
    const validateAndDispatchError = (value: L[T]) => {
      const result = validate(config?.rules, value);
      const error = !result.isValid
        ? getErrorMessage(config?.messages, result.type)
        : undefined;

      dispatch(setError(name, error));

      return result;
    };

    return {
      name,
      value: state.values[name] as L[T],
      setValue(value: L[T]) {
        if (isNotUndefined(state.validated[name])) {
          validateAndDispatchError(value);
        }
        dispatch(setField(name, value));
      },
      validate: (value: L[T]) => {
        dispatch(setValidated(name));

        return validateAndDispatchError(value).isValid;
      },
      error: state.errors[name],
    };
  };
