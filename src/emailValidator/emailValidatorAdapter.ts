import { IEmailValidator } from '../repositories/IEmailValidator';
import validator from 'validator';

export default class emailValidatorAdapter implements IEmailValidator {
  constructor() {}

  isValidEmail(email: string): boolean {
    return validator.isEmail(email);
  }
}
