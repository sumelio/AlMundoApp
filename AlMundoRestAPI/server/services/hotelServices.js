var { mongoose } = require('../db/mongoose');
var { HotelModel } = require('../modules/hotelModel');

const fs = require('fs');

var getHotel = (name, stars, res) => {
  var query;

  if (stars.includes(",")) { 
    query = {
      "stars": { $in:  stars.split(",") }, 
      "name": { '$regex': name, '$options': 'i' }
    }
  } else {
    query = { "name": { '$regex': name, '$options': 'i' } }
  }

  HotelModel.find(
    query
  ).then((hotels) => {
    res.send(hotels);
  }, (e) => {
    res.status(400).send(e);
  })

};
var getHotelAll = (res) => {
  HotelModel.find().then((hotels) => {
    res.send(hotels);
  }, (e) => {
    res.status(400).send(e);
  })

};
var createHotel = (body, res) => {

  var newHotel = new HotelModel({
    "_id": body.id,
    "id": body.id,
    "name": body.name,
    "stars": body.stars,
    "price": body.price,
    "image": body.image,
    "amenities": body.amenities
  });


  newHotel.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    console.log('Unable to save hotel' + e);
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
    { new: true, upsert: true },
    (err, doc) => {

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
    (err, doc) => {

      if (err) {
        console.log("Error > " + err);
        res.status(400).send(err);
      } else {
        res.send(doc);
      }
    });
}

module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotelAll
};



var fetchHotels = () => {
  try {
    var hotelsObject = fs.readFileSync('./data/data.json');
    return JSON.parse(hotelsObject);
  } catch (e) {
    console.log(e);
    return [];
  }
};
function initDataBase() {

  console.log('Init dataBase....');
  HotelModel.find().then((hotels) => {
    if (hotels.length == 0) {

      fetchHotels().forEach(function (element) {
        var newHotel = new HotelModel({
          "_id": element.id,
          "id": element.id,
          "name": element.name,
          "stars": element.stars,
          "price": element.price,
          "image": element.image,
          "amenities": element.amenities
        });


        newHotel.save().then((doc) => {
          console.log(doc);
        }, (e) => {
          console.log('Unable to save hotel' + e);
        });


      });
    }
  }, (e) => {
    console.log(e);
  })

}

initDataBase();
