import { isEmpty } from './isEmpty';

export const isNotEmpty = <T>(value: T | undefined | null): value is T =>
  !isEmpty(value);
