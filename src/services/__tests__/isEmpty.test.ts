import { isEmpty } from '@/services/isEmpty';

describe('isEmpty', () => {
  it('should return true if value passed is null, empty string or undefined', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return false if value passed is something else', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(1)).toBe(false);
    expect(isEmpty(1.1)).toBe(false);
    expect(isEmpty(NaN)).toBe(false);
    expect(isEmpty(Infinity)).toBe(false);
    expect(isEmpty('string')).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty({})).toBe(false);
    expect(isEmpty([])).toBe(false);
  });
});
