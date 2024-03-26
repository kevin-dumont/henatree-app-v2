import { Reducer, useMemo, useReducer } from 'react';

import { KeyOf } from '@/types/utils';

import { registerField } from '../services/registerField';
import { UseFormBuilderParams } from '../types/types';

import { Action, initialState, reducer, State } from './store';

export const useFormBuilder = <L extends Record<string, any>>(
  config?: UseFormBuilderParams<L>,
) => {
  const [state, dispatch] = useReducer<Reducer<State<KeyOf<L>>, Action>>(
    <Reducer<State<KeyOf<L>>, Action>>reducer,
    {
      ...initialState,
      values: {
        ...initialState.values,
        ...(config?.defaultValues || ({} as L)),
      },
    },
  );

  const register = useMemo(
    () => registerField(state, dispatch),
    [state, dispatch],
  );

  return { register };
};
