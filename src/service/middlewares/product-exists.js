'use strict';

const {
  HttpCode
} = require(`../../constants`);

module.exports = (productService) => async (req, res, next) => {
  const {
    productId
  } = req.params;
  const product = await productService.findOne(productId);

  if (!product) {
    res.status(HttpCode.NOT_FOUND)
      .send(`The product with the id ${product} is not found`);
    return;
  }

  res.locals.product = product;
  next();
};
