/* eslint-disable */
const { Sequelize } = require('sequelize');
const configuration = require('../../config/db');

const { literal, Op, fn, col, where } = Sequelize;

const createConnection = (config) => {
  
  const connection = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      port: config.port,
      dialect: config.dialect,
      logging: config.logging,
      ssl: config.ssl,
      dialectOptions: config.dialectOptions,
      pool: config.pool
    }
  );
  
  connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
  return connection;
};

const sequelize = createConnection(configuration);

const connect = (config) => createConnection(config);

module.exports = {
  sequelize,
  Sequelize,
  literal,
  Op,
  fn,
  col,
  where,
  connect
};
