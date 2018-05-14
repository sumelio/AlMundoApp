var mongoose = require('mongoose');

const model = {
    
   "_id": { type: Number, required: true, minlength: 1 },
   "id": { type: Number, required: true, minlength: 1 },
   "name": {type: String, required: true, minlength: 1, trim: true },
   "stars": {type: Number, required: true, minlength:1 },
   "price": {type: Number, required: true, minlength: 1 },
   "image": {type: String, required: true, minlength: 1, trim: true },
   "amenities": { type: [], required: true, minlength: 1 }
}

var HotelModel = mongoose.model("collection_hotels", model ); 

module.exports = {HotelModel};