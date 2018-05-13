var mongoose = require('mongoose')

var MONGO_DB_CONNECTION = process.env.MONGO_DB_CONNECTION || 'mongodb://localhost:27017/';

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_DB_CONNECTION + 'dbAlMundo');

module.exports = {mongoose};
 