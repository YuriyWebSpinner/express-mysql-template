const express = require("express");
const config = require('../../config/app');

const init = async (app) => {
  app.use('/public', express.static('public'));
  // if(!module.parent) {
    app.listen(config.port, () => {
      console.log(config.runMessage)
    })
  // }
}

module.exports = init;
