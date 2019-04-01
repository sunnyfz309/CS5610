var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost:27017/webdev', {useMongoClient: true});
var db = mongoose.connect('mongodb://heroku_vrlqj8k0:untka77160s5bskh9gm4i4deqt@ds031847.mlab.com:31847/heroku_vrlqj8k0',
  {useMongoClient: true});

module.exports = db;
