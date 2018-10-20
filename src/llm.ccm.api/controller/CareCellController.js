const CareCell = require("../models").CareCell;

module.exports = {

    create(req,res){
        return CareCell
        .create({name:req.body.name})
        .then(careCell=>res.status(201).send(careCell))
        .catch(error=>res.status(400).send(error))
    },
}