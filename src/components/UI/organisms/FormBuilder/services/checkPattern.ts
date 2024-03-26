import { FormRule } from '../types/types';

/**
 * Predicate to check if fieldValue respects the pattern rule
 *
 * @eg The validate rule is specified by an object like { pattern: /^[a-z]+/ } where pattern is a Regex
 * @param rules FormRule<V> : The rules to apply
 * @param fieldValue V : The value to check
 */
export const checkPattern = <V>(rules: FormRule<V>, fieldValue: V): boolean =>
  rules.pattern ? rules.pattern.test(String(fieldValue)) : true;
