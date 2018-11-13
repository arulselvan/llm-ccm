'use strict';
module.exports = (sequelize, DataTypes) => {
  const CareCellSoulsAttendance = sequelize.define('CareCellSoulsAttendance', {
    date:DataTypes.DATE,
    name: DataTypes.STRING,
    isNew: DataTypes.BOOLEAN
  }, {});
  CareCellSoulsAttendance.associate = function(models) {
    // associations can be defined here
    CareCellSoulsAttendance.belongsTo(models.CareCell)
  };
  return CareCellSoulsAttendance;
};