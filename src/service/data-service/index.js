'use strict';

const ProductService = require(`./product`);
const CollectionService = require(`./collection`);
const CategoryService = require(`./category`);
const SearchService = require(`./search`);
const UserService = require(`./user`);
const RefreshTokenService = require(`./refreshToken`);

module.exports = {
  ProductService,
  CollectionService,
  CategoryService,
  SearchService,
  UserService,
  RefreshTokenService,
};
