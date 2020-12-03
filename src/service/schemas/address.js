'use strict';

const Joi = require(`joi`).extend(require(`joi-phone-number`));
const {
  EditAddressMessage,
} = require(`../../constants`);

module.exports = Joi.object({

  firstName: Joi.string()
    .required()
    .messages({
      'any.required': EditAddressMessage.FIRST_NAME_REQUIRED_FIELD,
    }),

  lastName: Joi.string()
    .required()
    .messages({
      'any.required': EditAddressMessage.LAST_NAME_REQUIRED_FIELD,
    }),

  companyName: Joi.string(),

  country: Joi.string()
    .length(2)
    .required()
    .messages({
      'any.required': EditAddressMessage.COUNTRY_REQUIRED_FIELD,
    }),

  state: Joi.string()
    .length(2)
    .when(`country`, {is: `US`, then: Joi.required()})
    .messages({
      'any.required': EditAddressMessage.STATE_REQUIRED_FIELD,
    }),

  city: Joi.string()
    .required()
    .messages({
      'any.required': EditAddressMessage.CITY_REQUIRED_FIELD,
    }),

  houseStreet: Joi.string()
    .required()
    .messages({
      'any.required': EditAddressMessage.HOUSE_STREET_REQUIRED_FIELD,
    }),

  apartment: Joi.string(),

  postcode: Joi.number()
    .required()
    .messages({
      'any.required': EditAddressMessage.POSTCODE_REQUIRED_FIELD,
    }),

  email: Joi.string()
    .required()
    .email()
    .messages({
      'string.email': EditAddressMessage.WRONG_EMAIL,
      'any.required': EditAddressMessage.EMAIL_REQUIRED_FIELD,
    }),

  phone: Joi.string()
    .phoneNumber()
    .required()
    .messages({
      'any.required': EditAddressMessage.PHONE_REQUIRED_FIELD,
    }),
});
