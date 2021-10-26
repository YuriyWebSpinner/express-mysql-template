const express = require('express');
const app = express();
const router = require('./routes');
const application = require('./core/app');

router(app);
application.init(app);

module.exports = app;
