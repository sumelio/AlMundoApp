const express = require('express');
const hotelService = require('./services/hotelServices.js');

var app = express();

var PORT = 3001;

//Register Get method
app.get('/almundo/hotels', (req,res) => {
  var contents = hotelService.getHotelByName("Maria Angola Hotel & Centro de Convenciones");
  res.send(contents);
});


app.listen(PORT);
