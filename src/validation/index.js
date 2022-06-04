import * as Yup from 'yup';
import { isPossiblePhoneNumber } from 'libphonenumber-js';

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'Must be at least two letters')
    .max(15, 'Must be less than 15 characters')
    .test('startsWithCapital', 'The first letter must be uppercase', (value) =>
      value ? /[A-Z]/.test(value.charAt(0)) : value,
    ),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Must be at least two letters')
    .max(15, 'Must be less than 15 characters')
    .test('startsWithCapital', 'The first letter must be uppercase', (value) =>
      value ? /[A-Z]/.test(value.charAt(0)) : value,
    ),
  phone: Yup.string()
    .required('Phone number is required')
    .test('possiblePhoneNumber', 'Invalid phone number', (value) =>
      value ? isPossiblePhoneNumber(value) : value,
    ),
  email: Yup.string().email('Invalid email'),
});

export default ContactSchema;
