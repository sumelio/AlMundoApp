const fs = require('fs');
const db = require('.././repository/mongodb-connect');

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


var getHotelByNameAndStars2 = (name, stars) => {
  return db.getConnection().collection('collectionHotels')
            .find( { "stars": { $in: num } ,
                     "name" : {'$regex' : '1', '$options' : 'i'}  } ).toArray()
            .then((docs) =>
              {
                 console.log(" list " + JSON.stringify(docs, undefined, 2) );
               }, (err) => {
                 console.log('Error ' + err);
               }

              );

}

module.exports = {
  getHotelByNameAndStars
};


getHotelByNameAndStars2('l','1,2');
