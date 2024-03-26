import { Reducer } from 'react';

export type State<T extends string = any> = {
  values: Record<T, any>;
  errors: Record<T, string | undefined>;
  validated: Record<T, boolean>;
};

export const SET_FIELD = 'SET_FIELD';
export const SET_ERROR = 'SET_ERROR';
export const SET_VALIDATED = 'SET_VALIDATED';

export const setField = (name: string, value: any) =>
  ({
    type: SET_FIELD,
    payload: { name, value },
  }) as const;

export const setError = (fieldName: string, error: string | undefined) =>
  ({
    type: SET_ERROR,
    payload: { fieldName, error },
  }) as const;

export const setValidated = (fieldName: string) =>
  ({
    type: SET_VALIDATED,
    payload: { fieldName },
  }) as const;

export type Action =
  | ReturnType<typeof setField>
  | ReturnType<typeof setError>
  | ReturnType<typeof setValidated>;

export const initialState: State = {
  values: {},
  errors: {},
  validated: {},
};

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.name]: action.payload.value,
        },
      };
    case SET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.fieldName]: action.payload.error,
        },
      };
    case SET_VALIDATED:
      return {
        ...state,
        validated: {
          ...state.validated,
          [action.payload.fieldName]: true,
        },
      };
    default:
      return state;
  }
};
