'use strict';

const {
  Router
} = require(`express`);
const {
  HttpCode
} = require(`../../constants`);

const route = new Router();

module.exports = async (app, offerService) => {
  app.use(`/offers`, route);

  route.get(`/`, async (req, res) => {

    const offers = await offerService.findAll();

    res.status(HttpCode.OK).json(offers);
  });

};
