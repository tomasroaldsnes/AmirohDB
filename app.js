const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const app = express();





var uri = "mongodb://amiroh:zibbizaze@amirohdb-shard-00-00-01nte.mongodb.net:27017,amirohdb-shard-00-01-01nte.mongodb.net:27017,amirohdb-shard-00-02-01nte.mongodb.net:27017/test?ssl=true&replicaSet=amirohdb-shard-0&authSource=admin";


mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test'){
    mongoose.connect(uri);
}

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
    res.status(422).send( { error: err.message } );
});

module.exports = app;