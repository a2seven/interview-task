'use strict';

// Set default environment variables
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.NODE_CONFIG_DIR = __dirname + '/config/';

var express = require('express');
var config = require('config');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./src/routes');

/**
 * MongoDB configurations
 */
// var mongodbUrl = 'mongodb://' + config.DB_HOST + ':' + config.DB_PORT + '/' + config.DB_NAME;
var mongodbUrl = 'mongodb://192b150d103822cdb014cff95e865f6a:qwerty123@9a.mongo.evennode.com:27017,9b.mongo.evennode.com:27017/192b150d103822cdb014cff95e865f6a?replicaSet=eu-9';

// Database options
// Option auto_reconnect is defaulted to true
var dbOptions = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};

// Events on db connection
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error. Please make sure MongoDB is running. -> ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.error('MongoDB connection disconnected.')
});

mongoose.connection.on('reconnected', function() {
  console.error('MongoDB connection reconnected.')
});

// Connect to db
var connectWithRetry = function() {
  return mongoose.connect(mongodbUrl, dbOptions, function(err) {
    if (err) {
      console.error('Failed to connect to mongo on startup - retrying in 5 sec. -> ' + err);
      setTimeout(connectWithRetry, 5000);
    }
  });
};

connectWithRetry();

/**
 * Express app configurations
 */
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// Enable CORS
app.use(cors());

// Bootstrap routes
app.use(routes);

// Static files
app.use('/', express.static(__dirname + '/../public'));

// Once database open, start server
mongoose.connection.once('open', function callback() {
  console.log('Connection with database succeeded.');
  app.listen(process.env.PORT, function() {
    console.log('app listening on port %d in %s mode', this.address().port, app.settings.env);
  });
});

module.exports = app;
