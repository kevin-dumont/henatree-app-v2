import { isUndefined } from '@/services/isUndefined';

describe('isUndefined', () => {
  it('should return true if value passed is undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('should return false if value passed is something else', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined(1.1)).toBe(false);
    expect(isUndefined(NaN)).toBe(false);
    expect(isUndefined(Infinity)).toBe(false);
    expect(isUndefined('string')).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(false)).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined([])).toBe(false);
  });
});
