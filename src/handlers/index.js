const auth = require('./auth');
const ping = require('./ping');
const users = require('./users');

const handlers = {
  ...auth,
  ...ping,
  ...users
};

module.exports = handlers;
