'use strict';

const Joi = require(`joi`);
const passwordComplexity = require(`joi-password-complexity`).default;
const {
  EditProfileMessage
} = require(`../../constants`);
const {
  currentPasswordsAreEqual
} = require(`./custom-methods`);

module.exports = (userId, userService) => (Joi.object({

  firstName: Joi.string(),

  lastName: Joi.string(),

  email: Joi.string()
    .required()
    .email()
    .messages({
      'string.email': EditProfileMessage.WRONG_EMAIL,
      'any.required': EditProfileMessage.EMAIL_REQUIRED_FIELD,
    }),

  displayName: Joi.string()
    .required()
    .messages({
      'any.required': EditProfileMessage.NAME_REQUIRED_FIELD,
    }),

  passwordObj: Joi.object({
    currentPassword: Joi.string()
      .external(currentPasswordsAreEqual(userId, userService), `Current passwords are equal validation`)
      .required()
      .messages({
        'any.required': EditProfileMessage.CURRENT_PASSWORD_REQUIRED_FIELD,
        'any.custom': EditProfileMessage.CURRENT_PASSWORD_IS_INCORRECT,
      }),

    newPassword: passwordComplexity(undefined, `Password`)
      .required()
      .disallow(Joi.ref(`currentPassword`))
      .messages({
        'any.required': EditProfileMessage.NEW_PASSWORD_REQUIRED_FIELD,
        'any.invalid': EditProfileMessage.SAME_NEW_PASSWORD,
      }),

    repeat: Joi.string()
      .required()
      .valid(Joi.ref(`newPassword`))
      .messages({
        'any.only': EditProfileMessage.PASSWORDS_NOT_EQUALS,
        'any.required': EditProfileMessage.REPEAT_REQUIRED_FIELD,
      }),
  }),

}));
