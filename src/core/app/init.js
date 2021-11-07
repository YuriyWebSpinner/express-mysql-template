const express = require("express");
const cors = require('cors');

const init = async (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
}

module.exports = init;
