import { checkRequired } from '../checkRequired';

describe(checkRequired, () => {
  it.each([
    { required: true, value: 0, expected: true },
    { required: true, value: [], expected: true },
    { required: true, value: 'string', expected: true },
    { required: true, value: undefined, expected: false },
    { required: true, value: '', expected: false },
    { required: true, value: null, expected: false },
  ])(
    'should return $expected if required if $required for value $value',
    ({ required, value, expected }) => {
      const givenRules = { required };

      const res = checkRequired(givenRules, value);

      expect(res).toBe(expected);
    },
  );
});
