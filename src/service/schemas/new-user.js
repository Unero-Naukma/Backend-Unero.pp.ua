'use strict';

const Joi = require(`joi`);
const passwordComplexity = require(`joi-password-complexity`).default;
const {
  RegisterMessage
} = require(`../../constants`);

module.exports = Joi.object({

  email: Joi.string()
    .required()
    .email()
    .messages({
      'string.email': RegisterMessage.WRONG_EMAIL,
      'any.required': RegisterMessage.EMAIL_REQUIRED_FIELD,
    }),

  name: Joi.string()
    .required()
    .messages({
      'any.required': RegisterMessage.NAME_REQUIRED_FIELD,
    }),

  password: passwordComplexity(undefined, `Password`)
    .required()
    .messages({
      'any.required': RegisterMessage.PASSWORD_REQUIRED_FIELD,
    }),

  repeat: Joi.string()
    .required()
    .valid(Joi.ref(`password`))
    .messages({
      'any.only': RegisterMessage.PASSWORDS_NOT_EQUALS,
      'any.required': RegisterMessage.REPEAT_REQUIRED_FIELD,
    }),

});
