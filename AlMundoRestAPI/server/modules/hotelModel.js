var mongoose = require('mongoose');

var HotelModel = mongoose.model("collection_hotels", {
    
   "_id": { type: Number, required: true, minlength: 1 },
   "id": { type: Number, required: true, minlength: 1 },
   "name": {type: String, required: true, minlength: 1, trim: true },
   "stars": {type: Number, required: true, minlength:1 },
   "price": {type: Number, required: true, minlength: 1 },
   "image": {type: String, required: true, minlength: 1, trim: true },
   "amenities": { type: [], required: true, minlength: 1 }
});

module.exports = {HotelModel};