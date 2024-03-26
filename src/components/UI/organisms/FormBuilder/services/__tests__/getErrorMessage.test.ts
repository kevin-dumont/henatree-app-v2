import { getErrorMessage } from '../getErrorMessage';

describe(getErrorMessage, () => {
  it("should return the given message if it's a string", () => {
    const givenMessage = 'string';
    const givenBreakingRule = 'required';

    const res = getErrorMessage(givenMessage, givenBreakingRule);

    expect(res).toBe(givenMessage);
  });

  it('should return the message according to the breaking rule given', () => {
    const givenMessage = 'given message';
    const givenMessages = { required: givenMessage };
    const givenBreakingRule = 'required';

    const res = getErrorMessage(givenMessages, givenBreakingRule);

    expect(res).toBe(givenMessage);
  });

  it('should return the default message according to the breaking rule given if no messages are given', () => {
    const givenMessages = undefined;
    const givenBreakingRule = 'required';

    const res = getErrorMessage(givenMessages, givenBreakingRule);

    expect(res).toBe('Ce champs est requis');
  });
});
