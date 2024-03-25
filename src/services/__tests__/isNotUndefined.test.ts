import { isNotUndefined } from '@services/isNotUndefined';

describe('isNotUndefined', () => {
  it('should return false if value passed is undefined', () => {
    expect(isNotUndefined(undefined)).toBe(false);
  });

  it('should return true if value passed is something else', () => {
    expect(isNotUndefined(null)).toBe(true);
    expect(isNotUndefined(0)).toBe(true);
    expect(isNotUndefined(1)).toBe(true);
    expect(isNotUndefined(1.1)).toBe(true);
    expect(isNotUndefined(NaN)).toBe(true);
    expect(isNotUndefined(Infinity)).toBe(true);
    expect(isNotUndefined('string')).toBe(true);
    expect(isNotUndefined(true)).toBe(true);
    expect(isNotUndefined(false)).toBe(true);
    expect(isNotUndefined({})).toBe(true);
    expect(isNotUndefined([])).toBe(true);
  });
});
