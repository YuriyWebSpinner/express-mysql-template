const express = require('express');
const swagger = require('../core/swagger');
const { errorHandler, error404Handler, loggerHandler } = require('../middlewares');
const setVer1 = require('./ver1');
const setVer2 = require('./ver2');

const appVer1 = express();
const appVer2 = express();

const router = (app) => {
  swagger.init(app,['./src/services/*.js','./src/routes/*.js']);
  app.use(loggerHandler);
  
  app.use('/v1/',appVer1);
  setVer1(appVer1);
  
  app.use('/v2/',appVer2);
  setVer2(appVer2);
  
  app.use(errorHandler);
  app.use(error404Handler);
}

module.exports = router;
