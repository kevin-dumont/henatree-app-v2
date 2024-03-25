import { Dispatch } from 'react';
import R from 'ramda';
import _ from 'lodash';

import { KeyOf } from '@typings/utils';
import { isNotEmpty, isNotUndefined } from '@utils/functions';

import { Action, setError, setField, setValidated, State } from './store';
import {
  FormErrorMessages,
  FormRules,
  UseFormRequireConfig,
  ValidationResult,
} from './types';
import { DEFAULT_ERROR_MESSAGES } from './constants';

/**
 * Create a validation
 * @param isValid boolean
 */
const createValidationResult = R.objOf('isValid');

/**
 * Create a validation error
 * @param ruleIdentifier 'required' | 'pattern' | 'validate' : The breaking rule identifier
 */
const createErrorOnField = R.pipe(
  R.objOf('type'),
  R.mergeDeepLeft(createValidationResult(false)),
);

/**
 * Transform a func like (a) -> (b) -> N
 * into (a, b) -> N
 * @param fn function to transform
 */
const uncurryPred = R.uncurryN<boolean>(2);

/**
 * Predicate to check if fieldValue respects the required rule
 *
 * The predicate to validate the field is ramda R.isEmpty function
 * @see https://ramdajs.com/docs/#isEmpty
 * @eg The validate rule is specified by an object like { required: true } - if required is true, the field must not to be empty
 * @param rules FormRule<V> : The rules to apply
 * @param fieldValue V : The value to check
 */
const checkRequired = uncurryPred(
  R.ifElse(
    R.propEq('required', true),
    R.always(R.both(isNotEmpty, isNotUndefined)),
    R.always(R.T),
  ),
);

/**
 * Predicate to check if fieldValue respects the pattern rule
 *
 * @eg The validate rule is specified by an object like { pattern: /^[a-z]+/ } where pattern is a Regex
 * @param rules FormRule<V> : The rules to apply
 * @param fieldValue V : The value to check
 */
const checkPattern = uncurryPred(
  R.ifElse(R.has('pattern'), R.pipe(R.prop('pattern'), R.test), R.always(R.T)),
);

/**
 * Predicate to check if fieldValue respects the validate rule
 *
 * @eg The validate rule is specified by an object like { validate: (a) => a > 10 } where the validate predicate will validate the fieldValue
 * @param rules FormRule<V> : The rules to apply
 * @param fieldValue V : The value to check
 */
const checkValidate = uncurryPred(
  R.ifElse(R.has('validate'), R.prop('validate'), R.always(R.T)),
);

/**
 * Check if a field is valid and returns the breaking rule if validation failed
 *
 * @eg The validate rule is specified by an object like { validate: (a) => a > 10 } where the validate predicate will validate the fieldValue
 * @param fieldValue Field value to validate
 * @param rules Rules of the FormBuilder step
 * @returns Object indicating if validation has passed, and type of the breaking rule if validation has failed
 */
export const validate: <V>(
  rules: undefined | FormRules<V>,
  fieldValue: V,
) => ValidationResult = R.cond([
  [_.isUndefined, R.always(createValidationResult(true))],
  [R.complement(checkRequired), R.always(createErrorOnField('required'))],
  [R.complement(checkPattern), R.always(createErrorOnField('pattern'))],
  [R.complement(checkValidate), R.always(createErrorOnField('validate'))],
  [R.T, R.always(createValidationResult(true))],
]);

/**
 * Getting the most important error message after validation
 *
 * @param validationResult Validation result object returned by validated()
 * @param messages Object of validation messages
 * @returns The first error message occured during validation
 */
export const getErrorMessage: (
  messages: FormErrorMessages | undefined,
  breakingRule: keyof FormRules<any>,
) => string = R.cond([
  [_.isString, R.identity],
  [_.isUndefined, R.pipe(R.nthArg(1), R.prop(R.__, DEFAULT_ERROR_MESSAGES))],
  [R.T, (msg, rule) => ({ ...DEFAULT_ERROR_MESSAGES, ...msg })[rule]],
]);

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
