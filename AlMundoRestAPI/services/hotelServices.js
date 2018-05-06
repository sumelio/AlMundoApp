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
  return param == '' || param  == 'null'|| param  == 'undefined' ;
}

module.exports = {
  getHotelByNameAndStars
}