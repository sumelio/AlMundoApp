var mongoose = require('mongoose')

var MONGO_DB_CONNECTION = process.env.MONGO_DB_CONNECTION || 'mongodb://localhost:27017/';

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_DB_CONNECTION + 'dbAlMundo');

module.exports = {mongoose};



// var newHotel = new hotelModel({
//    "id" :  111,
//    "name": "MyNotel",
//    "stars" : 3,
//    "price" : 22.23,
//    "image" : "algo.png",
//    "amenities" : [
//     "safety-box",
//     "nightclub",
//     "deep-soaking-bathtub",
//     "beach",
//     "business-center"
//   ]
// });
 