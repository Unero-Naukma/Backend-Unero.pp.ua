'use strict';

const HttpStatus = require(`http-status-codes`);

module.exports = (userService) => async (req, res, next) => {
  const {
    userData: {id: userId}
  } = res.locals;
  const user = await userService.findById(userId);

  if (!await user.getAddress()) {
    res.status(HttpStatus.BAD_REQUEST)
      .send(`The user with the id ${userId} already has an address.`);
    return;
  }

  res.locals.user = user;
  next();
};
