import { isNotEmpty } from '@services/isNotEmpty';
import { isNotUndefined } from '@services/isNotUndefined';

import { FormRule } from '../types/types';

/**
 * Predicate to check if fieldValue respects the required rule
 *
 * @eg The validate rule is specified by an object like { required: true } - if required is true, the field must not to be empty
 * @param rules FormRule<V> : The rules to apply
 * @param fieldValue V : The value to check
 */
export const checkRequired = <V>(rules: FormRule<V>, fieldValue: V): boolean =>
  rules.required ? isNotEmpty(fieldValue) && isNotUndefined(fieldValue) : true;
