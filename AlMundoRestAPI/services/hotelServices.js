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
  var hotels = fetchHotels();
  var filteredHotels;

  if(name && stars) {
       filteredHotels = hotels.filter((hotel) => hotel.name.toUpperCase().includes(name.toUpperCase()) 
                                             && hotel.stars == stars );
  } else if(name) {
      filteredHotels = hotels.filter((hotel) => hotel.name.toUpperCase().includes(name.toUpperCase()) );
  } else {
      filteredHotels = hotels;
  }

  return filteredHotels;
};

module.exports = {
  getHotelByNameAndStars
}