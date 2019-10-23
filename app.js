const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const app = express();





var uri =

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
