'use strict';

const {
  Router
} = require(`express`);

const {
  ProductService,
  CollectionService,
  CategoryService,
  SearchService
} = require(`../data-service`);

const product = require(`./products`);
const collection = require(`./collections`);
const category = require(`./categories`);
const search = require(`./search`);

const app = new Router();

const init = (db) => {
  product(app, new ProductService(db));
  collection(app, new CollectionService(db));
  category(app, new CategoryService(db));
  search(app, new SearchService(db));

  return app;
};

module.exports = init;
