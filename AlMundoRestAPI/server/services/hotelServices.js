var {mongoose} = require('../db/mongoose');
var {HotelModel} = require('../modules/HotelModel');

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
  return fetchHotels().filter(  hotel =>
                                  (     ( isEmpty(name)  || hotel.name.toUpperCase().startsWith(name.toUpperCase()) )
                                    &&  ( isEmpty(stars) || (stars).includes(hotel.stars) )
                                  )
                        );
};

function isEmpty(param) {
  return param == undefined || param == '' || param  == 'null'|| param  == 'undefined' ;
};


// var getHotelByNameAndStars2 = (name, stars) => {
//   return db.getConnection().collection('collectionHotels')
//             .find( { "stars": { $in: num } ,
//                      "name" : {'$regex' : '1', '$options' : 'i'}  } ).toArray()
//             .then((docs) =>
//               {
//                  console.log(" list " + JSON.stringify(docs, undefined, 2) );
//                }, (err) => {
//                  console.log('Error ' + err);
//                }

//               );

// }


var persistHotel = (body, res) => {

    var newHotel = new HotelModel({
          "id" :  body.id,
          "name": body.name,
          "stars" : body.stars,
          "price" : body.price,
          "image" : body.image,
          "amenities" : body.amenities
   });


   newHotel.save().then((doc) => {
            console.log('Saved hotel ', doc);
            res.send(doc);
          }, (e) => {
            console.log('Unable to save hotel'); 
            res.status(400).send(e);
          });


  // HotelModel.findOneAndUpdate({ "id" :  body.id }, 
  //       { $set:  {  "id" :  body.id,
  //         "name": body.name,
  //         "stars" : body.stars,
  //         "price" : body.price,
  //         "image" : body.image,
  //         "amenities" : body.amenities}
  //       },
  //         { upsert: true },
  //     (err, doc) => {
  //         if(err) {
  //           res.status(400).send(err);
  //         } else {
  //           res.send(doc);
  //         }
          
  //     });

}

module.exports = {
  getHotelByNameAndStars,
  persistHotel
};


//getHotelByNameAndStars2('l','1,2');
