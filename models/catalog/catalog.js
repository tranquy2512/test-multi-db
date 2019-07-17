'use strict';
module.exports = (sequelize, DataTypes) => {
  const Catalog = sequelize.define('Catalog', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Catalog.associate = function(models) {
    // associations can be defined here
  };
  return Catalog;
};