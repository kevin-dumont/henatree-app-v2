export const isEmpty = <T>(
  value: T | undefined | null,
): value is null | undefined => {
  return value === undefined || value == null || value === '';
};
