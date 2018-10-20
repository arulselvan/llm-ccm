'use strict';
module.exports = (sequelize, DataTypes) => {
  const CareCell = sequelize.define('CareCell', {
    name: DataTypes.STRING
  }, {});
  CareCell.associate = function(models) {
    // associations can be defined here
  };
  return CareCell;
};