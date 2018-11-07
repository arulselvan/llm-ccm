const CareCell = require("../models").CareCell;
const CareCellSoulsAttendance = require("../models").CareCellSoulsAttendance;

const User = require("../models").User;
module.exports = {

    create(req,res){
        return CareCell
        .create({name:req.body.name, RegionId:req.body.regonId})
        .then(careCell=>res.status(201).send(careCell))
        .catch(error=>res.status(400).send(error))
    },

    addUsers(req,res){
        return CareCell.findById(req.body.id).then(careCell=>{
            User.findById(requ.body.userId).then(user=>{
                careCell.addUser(user).then(ccUser=>{
                    res.status(200).send(ccUser);
                })
            })
        })
    },

    soulsAttendance(req,res){
        return CareCellSoulsAttendance
        .create({date:req.body.date,name:req.body.name,CareCellId:req.body.careCellId})
        .then(ccAttendence=>{
            res.status(200).send(ccAttendence);
        })
    }

}