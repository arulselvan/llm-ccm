'use strict';
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    name: DataTypes.STRING
  }, {});
  Region.associate = function(models) {
    // associations can be defined here
  };
  return Region;
};