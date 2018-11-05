'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName:DataTypes.STRING,
    lastName:DataTypes.STRING,
    gender:DataTypes.STRING,
    email:DataTypes.STRING,
    phone:DataTypes.STRING,
    address:DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here

    User.belongsToMany(models.Role,{
      through: 'UserRole'
    })
  };
  return User;
};