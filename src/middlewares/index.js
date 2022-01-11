const auth = require('./auth');
const validator = require('./validator').validate;
const errorHandler = require('./error');
const error404Handler = require('./error404');
const loggerHandler = require('./logger');


module.exports = {
  auth,
  validator,
  loggerHandler,
  errorHandler,
  error404Handler
}
