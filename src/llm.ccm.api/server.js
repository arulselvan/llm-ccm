const express = require("express");
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const route = require('./route/index');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

route(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to LLM care cell management',
}));


const port = parseInt(process.env.PORT, 10) || 8000;

app.set('port', port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;
