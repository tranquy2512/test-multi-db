if (process.env.NODE_ENV === 'development') {
  require('dotenv').config(); //eslint-disable-line
}

const config = {};

config[process.env.NODE_ENV] = {
  database: process.env.USER_DB_NAME,
  username: process.env.USER_DB_USERNAME,
  password: process.env.USER_DB_PASSWORD,
  host: process.env.USER_DB_HOST,
  port: parseInt(process.env.USER_DB_PORT || '', 10),
  modelsPath: 'user',
  dialect: 'postgres'
}

module.exports = config;
