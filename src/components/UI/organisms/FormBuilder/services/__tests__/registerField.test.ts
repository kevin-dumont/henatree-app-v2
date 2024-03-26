import { initialState, setError, setField } from '../../hooks/store';
import { getErrorMessage } from '../getErrorMessage';
import { registerField } from '../registerField';
import { validate } from '../validate';

jest.mock('../validate');
jest.mock('../getErrorMessage');

describe(registerField, () => {
  it('returns field registration object with default values', () => {
    const givenState = initialState;
    const givenDispatch = jest.fn();
    const givenFieldName = 'testField';

    const res = registerField(givenState, givenDispatch)(givenFieldName);

    expect(res).toStrictEqual(
      expect.objectContaining({
        name: givenFieldName,
        value: undefined,
        error: undefined,
      }),
    );
  });

  it('correctly updates the field value', () => {
    const givenState = initialState;
    const givenDispatch = jest.fn();
    const givenFieldName = 'testField';
    const givenValue = 'new value';

    const { setValue } = registerField(
      givenState,
      givenDispatch,
    )(givenFieldName);

    setValue(givenValue);

    expect(givenDispatch).toHaveBeenCalledWith(
      setField(givenFieldName, givenValue),
    );
  });

  it('triggers validation on value change if field was previously validated', () => {
    const givenState = { ...initialState, validated: { testField: true } };
    const givenDispatch = jest.fn();
    const givenFieldName = 'testField';
    const givenValue = 'value';

    (validate as jest.Mock).mockReturnValue({ isValid: true });

    const { setValue } = registerField(
      givenState,
      givenDispatch,
    )(givenFieldName);

    setValue(givenValue);

    expect(validate).toHaveBeenCalled();
  });

  it('sets no error on successful validation', () => {
    const givenState = { ...initialState, validated: { testField: true } };
    const givenDispatch = jest.fn();
    const givenFieldName = 'testField';
    const givenValue = 'valid value';

    (validate as jest.Mock).mockReturnValue({ isValid: true });

    const { setValue } = registerField(
      givenState,
      givenDispatch,
    )(givenFieldName);

    setValue(givenValue);

    expect(givenDispatch).toHaveBeenCalledWith(
      setError(givenFieldName, undefined),
    );
  });

  it('updates error state on validation failure', () => {
    const givenState = { ...initialState, validated: { testField: true } };
    const givenDispatch = jest.fn();
    const givenFieldName = 'testField';
    const givenValue = 'invalid value';

    (validate as jest.Mock).mockReturnValue({
      isValid: false,
      type: 'required',
    });
    (getErrorMessage as jest.Mock).mockReturnValue('This field is required.');

    const { setValue } = registerField(
      givenState,
      givenDispatch,
    )(givenFieldName);

    setValue(givenValue);

    expect(givenDispatch).toHaveBeenCalledWith(
      setError(givenFieldName, 'This field is required.'),
    );
  });

  it('does not trigger validation on value change if field was not previously validated', () => {
    const givenState = initialState;
    const givenDispatch = jest.fn();
    const givenFieldName = 'testField';
    const givenValue = 'value';

    (validate as jest.Mock).mockReturnValue({ isValid: true });

    const { setValue } = registerField(
      givenState,
      givenDispatch,
    )(givenFieldName);

    setValue(givenValue);

    expect(validate).not.toHaveBeenCalled();
  });

  it('triggers validation manually', () => {
    const givenState = initialState;
    const givenDispatch = jest.fn();
    const givenFieldName = 'testField';
    const givenValue = 'value';
    const givenRule = undefined;

    (validate as jest.Mock).mockReturnValue({ isValid: true });

    const { validate: validateField } = registerField(
      givenState,
      givenDispatch,
    )(givenFieldName, givenRule);

    validateField(givenValue);

    expect(validate).toHaveBeenCalledWith(givenRule, givenValue);
  });

  it('correctly handles fields with no validation rules specified', () => {
    const givenState = initialState;
    const givenDispatch = jest.fn();
    const givenFieldName = 'testField';
    const givenValue = 'value';

    const { setValue } = registerField(
      givenState,
      givenDispatch,
    )(givenFieldName);

    setValue(givenValue);

    expect(validate).not.toHaveBeenCalled();
    expect(givenDispatch).toHaveBeenCalledWith(
      setField(givenFieldName, givenValue),
    );
  });
});
