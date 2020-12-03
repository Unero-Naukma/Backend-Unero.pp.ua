'use strict';

const {
  Router
} = require(`express`);

const {
  ProductService,
  CollectionService,
  CategoryService,
  SearchService,
  UserService,
  RefreshTokenService,
} = require(`../data-service`);

const product = require(`./products`);
const collection = require(`./collections`);
const category = require(`./categories`);
const search = require(`./search`);
const user = require(`./user`);

const app = new Router();

const init = (db) => {
  const productService = new ProductService(db);
  product(app, productService);
  collection(app, new CollectionService(db));
  category(app, new CategoryService(db));
  search(app, new SearchService(db));
  user(app, new UserService(db), new RefreshTokenService(db), productService);

  return app;
};

module.exports = init;
