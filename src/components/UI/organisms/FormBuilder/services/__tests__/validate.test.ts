import { checkPattern } from '../checkPattern';
import { checkRequired } from '../checkRequired';
import { checkValidate } from '../checkValidate';
import { validate } from '../validate';

jest.mock('../checkPattern');
jest.mock('../checkRequired');
jest.mock('../checkValidate');

describe(validate, () => {
  it('should return the correct payload if no rule', () => {
    const givenRule = undefined;
    const givenValue = 'a';

    const res = validate(givenRule, givenValue);

    expect(res).toStrictEqual({ isValid: true });
  });

  describe.each([
    { fn: checkPattern, type: 'pattern' },
    { fn: checkRequired, type: 'required' },
    { fn: checkValidate, type: 'validate' },
  ])('for $fn.name it', ({ fn, type }) => {
    beforeEach(() => {
      (checkPattern as jest.Mock).mockReturnValue(fn !== checkPattern);
      (checkRequired as jest.Mock).mockReturnValue(fn !== checkRequired);
      (checkValidate as jest.Mock).mockReturnValue(fn !== checkValidate);
    });

    it(`should call ${fn.name} with the right params`, () => {
      const givenRule = {};
      const givenValue = 'a';

      validate(givenRule, givenValue);

      expect(checkRequired).toHaveBeenCalledWith(givenRule, givenValue);
    });

    it(`should return the correct payload if ${fn.name} fails`, () => {
      const givenRule = {};
      const givenValue = 'a';

      const res = validate(givenRule, givenValue);

      expect(res).toStrictEqual({ isValid: false, type });
    });
  });
});
