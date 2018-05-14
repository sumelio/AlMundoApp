var mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_DB_CONNECTION);

module.exports = {mongoose};
 