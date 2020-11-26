'use strict';

const {
  HttpCode
} = require(`../../constants`);

module.exports = (collectionService) => async (req, res, next) => {
  const {
    collectionId
  } = req.params;
  const collection = await collectionService.findOne(collectionId);

  if (!collection) {
    res.status(HttpCode.NOT_FOUND)
      .send(`The product with the id ${collection} is not found`);
    return;
  }

  res.locals.collection = collection;
  next();
};
