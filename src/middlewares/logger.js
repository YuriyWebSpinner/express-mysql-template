const { init: initLogger } = require("../core/logger");

const loggerHandler = (req, res, next) => {
  const logger = initLogger();
  req.logger = logger;
  next();
}

module.exports = loggerHandler;
