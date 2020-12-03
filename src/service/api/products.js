'use strict';

const {
  Router
} = require(`express`);
const {
  HttpCode
} = require(`../../constants`);
const {
  productExists
} = require(`../middlewares`);

const route = new Router();

module.exports = (app, productService) => {
  app.use(`/products`, route);

  route.get(`/`, async (req, res) => {
    const options = req.body;

    const products = await productService.findAll(options);

    res.status(HttpCode.OK).json(products);
  });

  route.get(`/:productId`, productExists(productService), (req, res) => {
    const {
      product
    } = res.locals;

    return res.status(HttpCode.OK)
      .json(product);
  });

};
