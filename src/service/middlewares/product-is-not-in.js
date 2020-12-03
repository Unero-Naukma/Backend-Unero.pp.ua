'use strict';

const HttpStatus = require(`http-status-codes`);

module.exports = (place, userService) => async (req, res, next) => {
  const {
    productId
  } = req.params;
  const {id: userId} = res.locals.userData;
  const productIsInCart = await userService.isProductIn(place, userId, productId);

  if (!productIsInCart) {
    res.status(HttpStatus.BAD_REQUEST)
      .send(`The product with the id ${productId} isn't in the ${place}.`);
    return;
  }

  next();
};
