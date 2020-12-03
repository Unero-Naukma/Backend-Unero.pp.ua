'use strict';

const productExists = require(`./product-exists`);
const collectionExists = require(`./collection-exists`);
const alreadyRegistered = require(`./already-registered`);
const authenticate = require(`./authenticate`);
const authenticateJwt = require(`./authenticate-jwt`);
const schemaValidator = require(`./schema-validator`);
const productIsAlreadyIn = require(`./product-is-already-in`);
const checkAmountOfProducts = require(`./check-amount-of-products`);
const productIsNotIn = require(`./product-is-not-in`);
const alreadyHasAddress = require(`./already-has-address`);

module.exports = {
  productExists,
  collectionExists,
  alreadyRegistered,
  authenticate,
  authenticateJwt,
  schemaValidator,
  productIsAlreadyIn,
  checkAmountOfProducts,
  productIsNotIn,
  alreadyHasAddress,
};

