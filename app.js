const express = require('express'),
    app = express(),
    cors = require('cors'),
    mysql = require('mysql'),
    bodyParser = require('body-parser');
const usersRouter = require('./routes/users');

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'simpleapi'
});

// make server object that contain port property and the value for our server.
const server = {
    port: 8080
};

// use the modules
app.use(cors())
app.use(bodyParser.json());
//middleware
app.use('/users', usersRouter);

// starting the server
app.listen(server.port, () => console.log(`Server started, listening port: ${server.port}`));