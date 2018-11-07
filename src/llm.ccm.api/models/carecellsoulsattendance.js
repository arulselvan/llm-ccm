'use strict';
module.exports = (sequelize, DataTypes) => {
  const CareCellSoulsAttendance = sequelize.define('CareCellSoulsAttendance', {
    date:DataTypes.DATE,
    name: DataTypes.STRING
  }, {});
  CareCellSoulsAttendance.associate = function(models) {
    // associations can be defined here
    CareCellSoulsAttendance.belongsTo(models.CareCell)
  };
  return CareCellSoulsAttendance;
};