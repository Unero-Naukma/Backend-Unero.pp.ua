'use strict';

module.exports = async (req, res, next) => {
  const {
    amount
  } = req.query;

  let newAmount = amount;
  if (!amount || amount < 0) {
    newAmount = 1;
  }

  res.locals.amount = newAmount;
  next();
};
