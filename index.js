const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.createConnection(config.uri, (err) => {
    if(err){
        console.log('Could not connect to databse: ', err);
    }else{
        console.log(config.secret);
        console.log('Connected to databse: ' + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'));
app.get('/', (req, res) => {
//    res.send('<h1>Hello World!</h1>');
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(1338, () => {
    console.log('Listing on port: 1338');
});