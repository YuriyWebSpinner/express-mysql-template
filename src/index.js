const express = require('express');
const app = express();
const router = require('./routes');
const application = require('./core/app');

application.init(app);
router(app);
application.finish(app);

module.exports = app;
