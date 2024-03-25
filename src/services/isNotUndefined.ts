import { isUndefined } from './isUndefined';

export const isNotUndefined = <T>(value: T | undefined): value is T => {
  return !isUndefined(value);
};
