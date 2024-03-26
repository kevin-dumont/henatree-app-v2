import { FormRule } from '../types/types';

/**
 * Predicate to check if fieldValue respects the validate rule
 *
 * @eg The validate rule is specified by an object like { validate: (a) => a > 10 } where the validate predicate will validate the fieldValue
 * @param rules FormRule<V> : The rules to apply
 * @param fieldValue V : The value to check
 */
export const checkValidate = <V>(rules: FormRule<V>, fieldValue: V): boolean =>
  rules.validate ? rules.validate(fieldValue) : true;
