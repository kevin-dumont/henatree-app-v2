import { FormRule, ValidationResult } from '../types/types';

import { checkRequired } from './checkRequired';
import { checkPattern } from './checkPattern';
import { checkValidate } from './checkValidate';

/**
 * Check if a field is valid and returns the breaking rule if validation failed
 *
 * @eg The validate rule is specified by an object like { validate: (a) => a > 10 } where the validate predicate will validate the fieldValue
 * @param fieldValue Field value to validate
 * @param rule Rules of the FormBuilder step
 * @returns Object indicating if validation has passed, and type of the breaking rule if validation has failed
 */
export const validate = <V>(
  rule: FormRule<V> | undefined,
  fieldValue: V,
): ValidationResult => {
  if (typeof rule === 'undefined') {
    return { isValid: true };
  }
  if (!checkRequired(rule, fieldValue)) {
    return { isValid: false, type: 'required' };
  }
  if (!checkPattern(rule, fieldValue)) {
    return { isValid: false, type: 'pattern' };
  }
  if (!checkValidate(rule, fieldValue)) {
    return { isValid: false, type: 'validate' };
  }
  return { isValid: true };
};
