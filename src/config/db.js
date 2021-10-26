require('dotenv').config();

module.exports = {
  username: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: 'mysqldb',
  port: process.env.MYSQL_LOCAL_PORT,
  dialect: 'mysql',
  ssl: false,
  logging: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    handleDisconnects: true,
    max: 1,
    min: 1,
    idle: 100000,
    acquire: 200000
  }
}
