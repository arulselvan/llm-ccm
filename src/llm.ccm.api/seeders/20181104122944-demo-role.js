'use strict';
const User = require("../models").User;
const Role = require("../models").Role;
const db = require('../models/index');


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*return db.sequelize.sync({ force: true }).then(result => {
      return Promise.all([
        queryInterface.bulkInsert('Roles', [{
          name: 'Leader',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'RegionLeader',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Admin',
          createdAt: new Date(),
          updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('Users', [{
          userName: 'test',
          password: 'test',
          email: 'arulselvanj@gmail.com',
          phone: '9952202050',
          firstName: 'Arul',
          lastName: 'Selvan',
          createdAt: new Date(),
          updatedAt: new Date()
        }])
      ]).then((values) => {

        console.log('all promise resolved');
        console.log(values);

        return User.findOne({ where: { userName: 'test' } }).then(user => {
          console.log("inside user find one");
          console.log(user);
          return Role.findAll({where:{name:'Leader'}}).then(roles => {
            console.log(roles)
            return user.setRoles(roles).then(sr => {
              console.log(sr);
            })
          }, error => { reject(error); })
          // project will be the first entry of the Projects table with the title 'aProject' || null
        })
      })

    })*/
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    /*db.sequelize.sync({ force: true }).then(result => {
      return new Promise((resolve, reject) => {
        Promise.all([
          queryInterface.bulkInsert('Roles', [{
            name: 'Leader',
            createdAt: new Date(),
            updatedAt: new Date()
          }, {
            name: 'RegionLeader',
            createdAt: new Date(),
            updatedAt: new Date()

          }, {
            name: 'Admin',
            createdAt: new Date(),
            updatedAt: new Date()
          }]),
          queryInterface.bulkInsert('Users', [{
            userName: 'test',
            password: 'test',
            email: 'arulselvanj@gmail.com',
            phone: '9952202050',
            firstName: 'Arul',
            lastName: 'Selvan',
            createdAt: new Date(),
            updatedAt: new Date()
          }])
        ]).then(([roleResults, userResult]) => {

          console.log('all promise resolved');

          User.findOne({ where: { userName: 'test' } }).then(user => {
            console.log("inside user find one");
            console.log(user);
            Role.findAll({}).then(roles => {
              console.log(roles)
              user.setRoles(roles).then(sr => {
                resolve(true);
              })
            }, error => { reject(error); })
            // project will be the first entry of the Projects table with the title 'aProject' || null
          })
        })
      })
    })*/

    /*return new Promise((resolve,reject)=>{
      queryInterface.bulkInsert('Roles',[{
        name:'Leader',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:'RegionLeader',
        createdAt:new Date(),
        updatedAt:new Date()
        
      },{
        name:'Admin',
        createdAt:new Date(),
        updatedAt:new Date()
      }]).then(result=> {
        console.log("inside role seed result");
        console.log(result);
        User.findAll({}).then(user => {
          console.log("inside user find one");
          console.log(user);
          Role.findAll({}).then(roles=>{
            console.log(roles)
             user[0].setRoles(roles).then(sr=>{
               resolve(true);
             })
          },error=> {reject(error);})
          // project will be the first entry of the Projects table with the title 'aProject' || null
        })
    
        
      })*/

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Roles', null, {});
  }
};
