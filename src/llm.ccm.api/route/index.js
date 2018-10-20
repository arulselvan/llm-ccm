const  CareCellController = require("../controller").CareCellController;


module.exports =(app) =>{

    app.get('/api',(req,res)=>res.status(200).send({
        message: 'Welcome to Care Cell Management API!'
    }))

    app.post('/api/care-cell',CareCellController.create);
}

