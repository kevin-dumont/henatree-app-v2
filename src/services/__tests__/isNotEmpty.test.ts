import { isNotEmpty } from '@/services/isNotEmpty';

describe('isNotEmpty', () => {
  it('should return false if value passed is null, empty string or undefined', () => {
    expect(isNotEmpty('')).toBe(false);
    expect(isNotEmpty(null)).toBe(false);
    expect(isNotEmpty(undefined)).toBe(false);
  });

  it('should return true if value passed is something else', () => {
    expect(isNotEmpty(0)).toBe(true);
    expect(isNotEmpty(1)).toBe(true);
    expect(isNotEmpty(1.1)).toBe(true);
    expect(isNotEmpty(NaN)).toBe(true);
    expect(isNotEmpty(Infinity)).toBe(true);
    expect(isNotEmpty('string')).toBe(true);
    expect(isNotEmpty(true)).toBe(true);
    expect(isNotEmpty(false)).toBe(true);
    expect(isNotEmpty({})).toBe(true);
    expect(isNotEmpty([])).toBe(true);
  });
});
