var mongoose = require('mongoose')

var MONGO_DB_CONNECTION = process.env.MONGO_DB_CONNECTION || 'mongodb://localhost:27017/';

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_DB_CONNECTION + 'dbAlMundo');

var hotelModel = mongoose.model("collectionHotels", {
     
    "id": { type: Number, required: true, minlength: 1 },
    "name": {type: String, required: true, minlength: 1, trim: true },
    "stars": {type: Number, required: true, minlength:1 },
    "price": {type: Number, required: true, minlength: 1 },
    "image": {type: String, required: true, minlength: 1, trim: true },
    "amenities": { type: [], required: true, minlength: 1 }
});

var newHotel = new hotelModel({
   "id" :  111,
   "name": "MyNotel",
   "stars" : 3,
   "price" : 22.23,
   "image" : "algo.png",
   "amenities" : [
    "safety-box",
    "nightclub",
    "deep-soaking-bathtub",
    "beach",
    "business-center"
  ]
});


// newHotel.save().then((doc) => {
//     console.log('Saved hotel ', doc);
// }, (e) => {
//     console.log('Unable to save hotel');
// })


hotelModel.findOneAndUpdate({ "id" :  111 }, 
                            { $set: { "name": 'MyNotel11111111'  }},
                            { upsert: true },
                        (err, doc) => {
                            if(err) {
                                console.log(err);
                            } else {
                                console.log(doc);
                            }
                            
                        });