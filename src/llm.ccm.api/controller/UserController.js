const User = require("../models").User;
const Role = require("../models").Role;
const db = require("../models/index");
const Op = db.Sequelize.Op

module.exports = {

    create(req,res){
        return User
        .create({userName:req.body.userName,password:req.body.password,firstName:req.body.firstName,lastName:req.body.lastName,gender:req.body.gender,email:req.body.email,phone:req.body.phone,address:req.body.address})
        .then(user=>res.status(201).send(user))
        .catch(error=>res.status(400).send(error))
    },

    setUserRoles(req,res){
        return User.findOne({where:{userName:req.body.userName}}).then(user=>{
            console.log(req.body.roles);
            return Role.findAll({}).then(roles=>{
                console.log(roles);
                return user.setRoles(roles).then(ur=>res.status(200).send(ur))
            })        
        })
    },
    
    getUserByUserName(req,res){
        console.log("inside user get call");
        return User.findOne({where:{userName:req.params.userName},include:[
            {model:Role}
        ]}).then(user=>{
            res.status(200).send(user);
        })
    }
}