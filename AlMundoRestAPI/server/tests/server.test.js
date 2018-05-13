const expect = require('expect')
const request = require('supertest')

const { app } = require('./../server');

const { HotelModel } = require('./../modules/hotelModel');

const { HotelService } = require('./../services/hotelServices');

const fakeHotelA ={  
    "id" :  -11,
    "_id" :  -11,
    "name": "fake_A",
    "stars" : 5,
    "price" : 12424.2,
    "image" : "imag1111.png",
    "amenities" : [
      "safety-box",
      "nightclub",
      "deep-soaking-bathtub",
      "beach",
      "business-center"
  ]
};

const fakeHotelB ={  
    "id" :  -222,
    "_id" :  -222,
    "name": "fake_B",
    "stars" : 5,
    "price" : 12424.2,
    "image" : "imag1111.png",
    "amenities" : [
      "safety-box",
      "nightclub",
      "deep-soaking-bathtub",
      "beach",
      "business-center"
  ]
};


const fakeHotels = [fakeHotelA];


beforeEach((done) => {
    // HotelModel.remove({}).then(() => {
    //     HotelModel.insertMany(fakeHotels);
    // }).then(() => done());

    //HotelModel.remove({}).then(() => done());

    HotelModel.findOneAndRemove(
        { "_id": -11 },
        (err, doc) => {
          if (err) {
            console.log("Error > " + err);
          }
        }).then(() => done());

});

describe('POST / Hotels', () => {
    it('Should create a new Hotel', (done) => {
 

        request(app)
            .post('/almundo/hotel')
            .send( fakeHotelA  )
            .expect(200)
            .expect((res) => {
                expect((res.body.id)).toBe(fakeHotelA.id);
                expect((res.body.name)).toBe(fakeHotelA.name);
                expect((res.body.stars)).toBe(fakeHotelA.stars);
                expect((res.body.image)).toBe(fakeHotelA.image);
                expect((res.body.price)).toBe(fakeHotelA.price);
                expect((res.body.amenities.length)).toBe(fakeHotelA.amenities.length);
            })
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    return done(err);
                }

                HotelModel.find({ "_id": fakeHotelA._id }).then((hotel) => {
                    expect(hotel.length).toBe(1);
                    expect(hotel[0].id).toBe(fakeHotelA.id);
                    expect(hotel[0].id).toBe(fakeHotelA.id);
                    expect(hotel[0].name).toBe(fakeHotelA.name);
                    expect(hotel[0].stars).toBe(fakeHotelA.stars);
                    expect(hotel[0].image).toBe(fakeHotelA.image);
                    expect(hotel[0].price).toBe(fakeHotelA.price);
                    expect(hotel[0].amenities.length).toBe(fakeHotelA.amenities.length);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('Should not create a new Hotel', (done) => {
        request(app)
            .post('/almundo/hotel')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                HotelModel.find({ "_id": fakeHotelA._id }).then((hotel) => {
                    expect(hotel.length).toBe(0);
                    done();
                }).catch((e) => done(e));
            });
    });

});


describe('PATCH / Hotels', () => {
    it('Should update a new Hotel', (done) => {
        var req ={  
              "id" :  12345,
              "name": "fake_Test",
              "stars" : 5,
              "price" : 12424.2,
              "image" : "imag1111.png",
              "amenities" : [
                "safety-box",
                "nightclub",
                "deep-soaking-bathtub",
                "beach",
                "business-center"
            ]
        };

        request(app)
            .patch('/almundo/hotel')
            .send( req  )
            .expect(200)
            .expect((res) => {
                expect(res.body.id).toBe(req.id);
                expect(res.body.name).toBe(req.name);
                expect(res.body.stars).toBe(req.stars);
                expect(res.body.image).toBe(req.image);
                expect(res.body.price).toBe(req.price);
                expect(res.body.amenities.length).toBe(req.amenities.length);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                HotelModel.find(req).then((hotel) => {
                    expect(hotel.length).toBe(1);
                    expect(hotel[0].id).toBe(req.id);
                    expect((hotel[0].id)).toBe(req.id);
                    expect((hotel[0].name)).toBe(req.name);
                    expect((hotel[0].stars)).toBe(req.stars);
                    expect((hotel[0].image)).toBe(req.image);
                    expect((hotel[0].price)).toBe(req.price);
                    expect((hotel[0].amenities.length)).toBe(req.amenities.length);
                    done();
                }).catch((e) => done(e));
            });
    });
});

describe('DELETE / Hotels', () => {
    it('Should delete the Hotel after create it', (done) => {
 

        request(app)
            .post('/almundo/hotel')
            .send( fakeHotelA  )
            .expect(200)
            .expect((res) => {
                expect(res.body.id).toBe(fakeHotelA.id);
            })
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    return done(err);
                }


                request(app)
                .delete('/almundo/hotel')
                .send( { "id": fakeHotelA.id } )
                .expect(200)
                .expect((res) => {
                    expect(res.body.id).toBe(fakeHotelA.id);
                })
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    HotelModel.find({ "_id": fakeHotelA._id })
                       .then((hotel) => {
                        expect(hotel.length).toBe(0);
                        done();
                    }).catch((e) => done(e));
    
                    
                });

            });
    });
});

describe('GET  hotels', () => {
    it('Should get all hotels', (done) => {

        HotelModel.insertMany(fakeHotels);

        request(app)
        .get('/almundo/hotel?name=fake_A')
        .expect(200)
        .expect((res) => {
            expect(res.body.length).toBe(1);
        })
        .end(done);

    });

    it('Should get hotel by name contains "B"  ', (done) => {

        HotelModel.insertMany(fakeHotels);

        request(app)
        .get("/almundo/hotel?name=fake_A")
        .expect(200)
        .expect((res) => {
            console.log('res.body ' + res.body);
            expect(res.body.length).toBe(1);
        })
        .end(done);

    });

    it('Should get hotel by stars equals 15  ', (done) => {

        HotelModel.insertMany(fakeHotels);
        request(app)
        .get("/almundo/hotel?name=fake_A&stars=5")
        .expect(200)
        .expect((res) => {
            console.log('res.body ' + res.body);
            expect(res.body.length).toBe(1);
        })
        .end(done);

    });
});