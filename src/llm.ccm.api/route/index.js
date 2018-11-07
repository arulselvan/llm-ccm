const  CareCellController = require("../controller").CareCellController;
const  RegionController = require("../controller").RegionController;
const  UserController = require("../controller").UserController;
const  RoleController = require("../controller").RoleController;


module.exports =(app) =>{

    app.get('/api',(req,res)=>res.status(200).send({
        message: 'Welcome to Care Cell Management API!'
    }))

    app.post('/api/care-cell',CareCellController.create);
    app.post('/api/care-cell/souls-attendance',CareCellController.soulsAttendance);

    app.post('/api/region',RegionController.create);

    app.get('/api/user/:userName',UserController.getUserByUserName);
    app.post('/api/user',UserController.create);
    app.put('/api/user-roles',UserController.setUserRoles);

    app.post('/api/role',RoleController.create);
}

