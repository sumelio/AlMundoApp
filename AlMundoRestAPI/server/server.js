const express = require('express');
var bodyParser = require('body-parser');

const hotelService = require('./services/hotelServices');
const cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());

var PORT_NODE_SERVER = process.env.PORT_NODE_SERVER || 3000;

//Register GET method
app.get('/almundo/hotel', (req,res) => {
  //var contents = hotelService.getHotelByNameAndStars(req.query.name, req.query.stars);
  //res.send(contents);
   if(req.query.name || req.query.stars ) {
     hotelService.getHotel(req.query.name, req.query.stars, res);
   }else {
    hotelService.getHotelAll(res);
   }
});

//Register POST method
app.post('/almundo/hotel', (req,res) => {
   hotelService.createHotel(req.body, res);
})

//Register PATCH method
app.patch('/almundo/hotel', (req,res) => {
  hotelService.updateHotel(req.body, res);
})

//Register Delete method
app.delete('/almundo/hotel', (req,res) => {
  hotelService.deleteHotel(req.body, res);
})

//Register Default response
app.get('/', (req, res) => {
 res.send({
   errorMessage: 'Unable to handle request'
 })
})

app.listen(PORT_NODE_SERVER, () => {
  console.log( `Server AlMundoAPI is up on port ${PORT_NODE_SERVER} ....`)
});

module.exports = { app };