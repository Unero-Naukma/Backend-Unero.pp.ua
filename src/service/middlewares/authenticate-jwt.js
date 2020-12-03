'use strict';

const jwt = require(`jsonwebtoken`);
const HttpStatus = require(`http-status-codes`);

const {JWT_ACCESS_SECRET} = require(`../../../config-env`);

module.exports = (req, res, next) => {
  const authorization = req.headers[`authorization`];

  if (!authorization) {
    res.sendStatus(HttpStatus.UNAUTHORIZED);
    return;
  }

  const [, token] = authorization.split(` `);

  if (!token) {
    res.sendStatus(HttpStatus.UNAUTHORIZED);
    return;
  }

  jwt.verify(token, JWT_ACCESS_SECRET, (err, userData) => {
    if (err) {
      const status = err.name === `TokenExpiredError` ? HttpStatus.UNAUTHORIZED : HttpStatus.FORBIDDEN;
      res.sendStatus(status);
      return;
    }

    res.locals.userData = userData;
    next();
  });
};
