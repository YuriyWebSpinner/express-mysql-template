const express = require("express");
const cors = require('cors');
const config = require('../../config/app');

const init = async (app) => {
  app.use(cors());
  app.use('/public', express.static('public'));
  
  app.listen(config.port, () => {
    console.log(config.runMessage)
  })
}

module.exports = init;
