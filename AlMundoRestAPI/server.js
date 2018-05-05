const express = require('express');
const hotelService = require('./services/hotelServices.js');
const cors = require('cors');

var app = express();



app.use(cors());

var PORT_NODE_SERVER = process.env.PORT_NODE_SERVER || 3000;

//Register Get method
app.get('/almundo/hotels', (req,res) => {
  console.log(' req.query.name ' + req.query.name )
  console.log(' req.query.stars ' + req.query.stars )

  //var contents = hotelService.getHotelByName("Maria Angola Hotel & Centro de Convenciones");
  var contents = hotelService.getHotelByNameAndStars(req.query.name, req.query.stars);
  res.send(contents);
});


app.get('/', (req, res) => {
 res.send({
   errorMessage: 'Unable to handle request'
 })
})

app.listen(PORT_NODE_SERVER, () => {
  console.log( `Server AlMundoAPI is up on port ${PORT_NODE_SERVER} ....`)
});