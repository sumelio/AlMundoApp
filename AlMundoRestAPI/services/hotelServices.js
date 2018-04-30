const fs = require('fs');


var fetchNotes = () => {
  try {
    var hotelsObject = fs.readFileSync('./data/data.json');
    return JSON.parse(hotelsObject);
  } catch (e) {
  	console.log(e);
    return [];
  }
};

var getAllHotels = () => {
	console.log('Get all hotels from file');
    return hotels;
}

var getHotelByName = (name) => {
  var hotels = fetchNotes();
  var filteredHotels = hotels.filter((hotel) => hotel.name === name);
  console.log(filteredHotels)
  return filteredHotels[0];
};

module.exports = {
	getAllHotels,
	getHotelByName
}