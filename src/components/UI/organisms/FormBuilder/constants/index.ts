import { FormErrorMessages } from '../types/types';

export const DEFAULT_ERROR_MESSAGES: Required<
  Exclude<FormErrorMessages, string>
> = {
  required: 'Ce champs est requis',
  pattern: "La valeur que vous avez saisi n'est pas au bon format",
  validate: 'Merci de saisir une valeur correcte',
} as const;
