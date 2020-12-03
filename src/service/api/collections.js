'use strict';

const {
  Router
} = require(`express`);
const {
  HttpCode
} = require(`../../constants`);
const {
  collectionExists
} = require(`../middlewares`);

const route = new Router();

module.exports = (app, collectionService) => {
  app.use(`/collections`, route);

  route.get(`/`, async (req, res) => {
    const collections = await collectionService.findAll();

    res.status(HttpCode.OK).json(collections);
  });

  route.get(`/:collectionId`, collectionExists(collectionService), (req, res) => {
    const {
      collection
    } = res.locals;

    return res.status(HttpCode.OK)
      .json(collection);
  });

};
