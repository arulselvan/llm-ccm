'use strict';
module.exports = (sequelize, DataTypes) => {
  const CareCell = sequelize.define('CareCell', {
    name: DataTypes.STRING
  }, {});
  CareCell.associate = function(models) {
    // associations can be defined here

    CareCell.belongsToMany(models.User,{
      through :'CareCellUsers'
    })

    CareCell.belongsTo(models.Region)
  };
  return CareCell;
};