var {mongoose} = require('../db/mongoose');
var {HotelModel} = require('../modules/hotelModel');

const fs = require('fs');



var fetchHotels = () => {
  try {
    var hotelsObject = fs.readFileSync('./data/data.json');
    return JSON.parse(hotelsObject);
  } catch (e) {
  	console.log(e);
    return [];
  }
};

var getHotelByNameAndStars = (name, stars) => {
  return fetchHotels()
     .filter(  hotel =>
                (     ( isEmpty(name)  || hotel.name.toUpperCase().startsWith(name.toUpperCase()) )
                  &&  ( isEmpty(stars) || (stars).includes(hotel.stars) )
                )
      );
};

function isEmpty(param) {
  return param == undefined || param == '' || param  == 'null'|| param  == 'undefined' ;
};



var getHotel = (body, res) => {
  

  HotelModel.findOne({ name: 'borne' }, function (err, doc) {
    if (err) ..
    doc.name = 'jason bourne';
    doc.save(callback);
  })
 
}; 

var createHotel = (body, res) => {
  
    var newHotel = new HotelModel({
          "_id" :  body.id,
          "id" :  body.id,
          "name": body.name,
          "stars" : body.stars,
          "price" : body.price,
          "image" : body.image,
          "amenities" : body.amenities
   });


   newHotel.save().then((doc) => {
            res.send(doc);
          }, (e) => {
            console.log('Unable to save hotel' + e ); 
            res.status(400).send(e);
          });
};
var updateHotel = (body, res) => {
      HotelModel.findOneAndUpdate(
        { "_id": body.id },
        {
          $set: {
            "id": body.id,
            "_id": body.id,
            "name": body.name,
            "price": body.price,
            "stars": body.stars,
            "image": body.image,
            "amenities": body.amenities
          }
        },
        {new : true, upsert : true},
        ( err, doc) => {
          
          if (err) {
            console.log("Error > " + err);
            res.status(400).send(err);
            
          } else {
            res.send(doc);
          }
        });
}


var deleteHotel = (body, res) => {
      HotelModel.findOneAndRemove(
        { "_id": body.id },
        ( err, doc) => {
          
          if (err) {
            console.log("Error > " + err);
            res.status(400).send(err);
          } else {
            res.send(doc);
          }
        });
}
module.exports = {
  getHotelByNameAndStars,
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel
};


//getHotelByNameAndStars2('l','1,2');
