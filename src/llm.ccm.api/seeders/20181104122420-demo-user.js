'use strict';
const db = require('../models/index');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return db.sequelize.sync({force:true});

   /*db.sequelize.sync({force:true}).then(result =>{

    return queryInterface.bulkInsert('Users',[{
      userName:'test',
      password:'test',
      email:'arulselvanj@gmail.com',
      phone:'9952202050',
      firstName:'Arul',
      lastName:'Selvan',
      createdAt:new Date(),
      updatedAt:new Date()
    }])

   })*/

   /*return db.sequelize.sync({ force: true });*/

   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

   return queryInterface.bulkDelete('Users', null, {});
  }
};
