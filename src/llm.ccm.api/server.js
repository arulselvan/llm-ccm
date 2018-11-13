const express = require("express");
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const route = require('./route/index');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

  

route(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to LLM care cell management',
}));


const port = parseInt(process.env.PORT, 10) || 3005;

app.set('port', port);
const server = http.createServer(app);
server.listen(port,function(){
    console.log('Server started at port = ',port);
});

module.exports = app;
