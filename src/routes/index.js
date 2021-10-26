const usersRoute = require('./users');
const swagger = require('../core/swagger');
const { errorHandler, error404Handler, loggerHandler } = require('../middlewares');

const router = (app) => {
  swagger.init(app,['./src/*/*.js']);
  app.use(loggerHandler);
  app.use('/users', usersRoute);
  app.use(errorHandler);
  app.use(error404Handler);
}

module.exports = router;
