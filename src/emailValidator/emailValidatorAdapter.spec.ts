import validator from 'validator';
import emailValidatorAdapter from './emailValidatorAdapter';

describe('Email Validator', () => {
  it('Validator mocked response should return false', () => {
    const sut = new emailValidatorAdapter();
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false);
    const isValidEmail = sut.isValidEmail('anyStringBecauseResponseIsMocked');
    expect(isValidEmail).toBe(false);
  });

  it('Validator mocked response should return true', () => {
    const sut = new emailValidatorAdapter();
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(true);
    const isValidEmail = sut.isValidEmail('anyStringBecauseResponseIsMocked');
    expect(isValidEmail).toBe(true);
  });

  it('Validator should been called with a valid email and response true', () => {
    const sut = new emailValidatorAdapter();
    const isValidSpyOn = jest.spyOn(validator, 'isEmail');
    const isValidEmail = sut.isValidEmail('email@email.com');

    expect(isValidSpyOn).toHaveBeenCalledWith('email@email.com');
    expect(isValidEmail).toBe(true);
  });

  it('Validator should been called with an invalid email and response false', () => {
    const sut = new emailValidatorAdapter();
    const isValidSpyOn = jest.spyOn(validator, 'isEmail');
    const isValidEmail = sut.isValidEmail('invalid#email.com');

    expect(isValidSpyOn).toHaveBeenCalledWith('invalid#email.com');
    expect(isValidEmail).toBe(false);
  });
});
