'use strict';

const {
  Router
} = require(`express`);

const {
  OfferService,
} = require(`../data-service`);

const offer = require(`./offers`);

const app = new Router();

const init = () => {
  offer(app, new OfferService());

  return app;
};

module.exports = init;
