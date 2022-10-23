const express = require('express'),
    app = express(),
    cors = require('cors'),
    mysql = require('mysql'),
    path = require('path'),
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
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
    //middleware
app.use('/users', usersRouter);
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname) + '/input.html');
});

// starting the server
app.listen(server.port, () => console.log(`Server started, listening port: ${server.port}`));