import { checkPattern } from '../checkPattern';

describe(checkPattern, () => {
  it('should return true if a value match', () => {
    const givenRules = { pattern: /^a$/ };

    const res = checkPattern(givenRules, 'a');

    expect(res).toBe(true);
  });

  it("should return false if a value doesn't match the pattern", () => {
    const givenRules = { pattern: /^a$/ };

    const res = checkPattern(givenRules, 'b');

    expect(res).toBe(false);
  });
});
