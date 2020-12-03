'use strict';

module.exports = (userId, userService) => async (value, helpers) => {
  const user = await userService.findById(userId);
  if (!await userService.checkUser(user, value)) {
    return helpers.error(`any.invalid`);
  }

  return value;
};
