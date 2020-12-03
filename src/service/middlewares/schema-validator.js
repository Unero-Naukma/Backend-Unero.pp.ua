'use strict';

const HttpStatus = require(`http-status-codes`);

module.exports = (schema, userService) => (
  async (req, res, next) => {
    const {body} = req;
    let newSchema = schema;
    if (userService) {
      const {
        userData: {id: userId}
      } = res.locals;

      newSchema = schema(userId, userService);
    }
    try {
      await newSchema.validateAsync(body, {abortEarly: false});
    } catch (err) {
      let {details = []} = err;
      if (details.length !== 0) {
        details = details.map((errorDescription) => errorDescription.message);
        if (err.message) {
          details.push(err.message);
        }
      } else {
        details.push(err.message);
      }
      res.status(HttpStatus.BAD_REQUEST)
        .json({
          errorMessages: details
        });
      return;
    }

    next();
  }
);
