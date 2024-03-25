import { isUndefined } from '@services/isUndefined';

import { FormErrorMessages, FormRule } from '../types/types';
import { DEFAULT_ERROR_MESSAGES } from '../constants';

/**
 * Getting the most important error message after validation
 *
 * @param validationResult Validation result object returned by validated()
 * @param messages Object of validation messages
 * @returns The first error message occurred during validation
 */
export const getErrorMessage = (
  messages: FormErrorMessages | undefined,
  breakingRule: keyof FormRule<any>,
): string => {
  if (isUndefined(messages)) {
    return DEFAULT_ERROR_MESSAGES[breakingRule];
  }
  if (typeof messages === 'string') {
    return messages;
  }
  return { ...DEFAULT_ERROR_MESSAGES, ...messages }[breakingRule];
};
