const Region = require("../models").Region;

module.exports = {

    create(req,res){
        return Region
        .create({name:req.body.name})
        .then(region=>res.status(201).send(region))
        .catch(error=>res.status(400).send(error))
    },
}