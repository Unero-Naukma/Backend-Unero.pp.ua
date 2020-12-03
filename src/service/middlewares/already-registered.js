'use strict';

const {RegisterMessage} = require(`../../constants`);
const HttpStatus = require(`http-status-codes`);

module.exports = (userService) => (
  async (req, res, next) => {
    const {email} = req.body;
    if (await userService.findByEmail(email)) {
      res.status(HttpStatus.BAD_REQUEST)
        .json({
          errorMessages: [RegisterMessage.USER_ALREADY_REGISTER]
        });
      return;
    }

    next();
  }
);

