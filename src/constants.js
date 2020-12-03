'use strict';

module.exports.DEFAULT_COMMAND = `--help`;

module.exports.USER_ARGV_INDEX = 2;

module.exports.ProductsPlacements = {
  cart: `cart`,
  wishlist: `wishlist`
};

module.exports.ExitCode = {
  error: 1,
  success: 0,
};

module.exports.HttpCode = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

module.exports.API_PREFIX = `/api`;

module.exports.RegisterMessage = {
  USER_ALREADY_REGISTER: `An account is already registered with your email address. Please log in.`,
  EMAIL_REQUIRED_FIELD: `Email is required. Fill this field and try again!`,
  NAME_REQUIRED_FIELD: `Name is required. Fill this field and try again!`,
  PASSWORD_REQUIRED_FIELD: `Password is required. Fill this field and try again!`,
  REPEAT_REQUIRED_FIELD: `Repeating password is required. Fill this field and try again!`,
  WRONG_EMAIL: `Email is invalid. Check and try again!`,
  PASSWORDS_NOT_EQUALS: `Passwords are not equal. Check and try again!`,
};

module.exports.EditProfileMessage = {
  EMAIL_REQUIRED_FIELD: `Email is required. Fill this field and try again!`,
  NAME_REQUIRED_FIELD: `Display name is required. Fill this field and try again!`,
  CURRENT_PASSWORD_REQUIRED_FIELD: `Current password is required. Fill this field and try again!`,
  NEW_PASSWORD_REQUIRED_FIELD: `New password is required. Fill this field and try again!`,
  REPEAT_REQUIRED_FIELD: `Repeating password is required. Fill this field and try again!`,
  WRONG_EMAIL: `Email is invalid. Check and try again!`,
  PASSWORDS_NOT_EQUALS: `Passwords are not equal. Check and try again!`,
  SAME_NEW_PASSWORD: `New password should be different from the current one!`,
  CURRENT_PASSWORD_IS_INCORRECT: `Current password is incorrect. Check and try again!`,
};

module.exports.EditAddressMessage = {
  FIRST_NAME_REQUIRED_FIELD: `First name is required. Fill this field and try again!`,
  LAST_NAME_REQUIRED_FIELD: `Last name is required. Fill this field and try again!`,
  COUNTRY_REQUIRED_FIELD: `Country is required. Fill this field and try again!`,
  STATE_REQUIRED_FIELD: `State is required. Fill this field and try again!`,
  CITY_REQUIRED_FIELD: `City is required. Fill this field and try again!`,
  HOUSE_STREET_REQUIRED_FIELD: `House and street are required. Fill this field and try again!`,
  POSTCODE_REQUIRED_FIELD: `Postcode is required. Fill this field and try again!`,
  WRONG_EMAIL: `Email is invalid. Check and try again!`,
  EMAIL_REQUIRED_FIELD: `Email is required. Fill this field and try again!`,
  PHONE_REQUIRED_FIELD: `Email is required. Fill this field and try again!`,
};

module.exports.LoginMessage = {
  USER_NOT_EXISTS: `Unknown username. Check and try again.`,
  WRONG_PASSWORD: `Wrong password. Check and try again.`,
};
