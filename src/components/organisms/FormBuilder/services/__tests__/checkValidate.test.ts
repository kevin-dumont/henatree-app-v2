import { checkValidate } from '../checkValidate';

describe(checkValidate, () => {
  it('should return true the validator returns true', () => {
    const givenRules = { validate: () => true };

    const res = checkValidate(givenRules, 'a');

    expect(res).toBe(true);
  });

  it('should return true the validator returns false', () => {
    const givenRules = { validate: () => false };

    const res = checkValidate(givenRules, 'b');

    expect(res).toBe(false);
  });
});
