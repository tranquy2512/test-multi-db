if (process.env.NODE_ENV === 'development') {
  require('dotenv').config(); //eslint-disable-line
}

const config = {};

config[process.env.NODE_ENV] = {
  database: process.env.CATALOG_DB_NAME,
  username: process.env.CATALOG_DB_USERNAME,
  password: process.env.CATALOG_DB_PASSWORD,
  port: parseInt(process.env.CATALOG_DB_PORT || '', 10),
  host: process.env.CATALOG_DB_HOST,
  modelsPath: 'catalog',
  dialect: 'mysql'
};

module.exports = config;
