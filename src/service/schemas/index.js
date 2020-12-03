'use strict';

const newUserSchema = require(`./new-user`);
const editedUserSchema = require(`./edited-user`);
const addressSchema = require(`./address`);

module.exports = {
  newUserSchema,
  editedUserSchema,
  addressSchema,
};
