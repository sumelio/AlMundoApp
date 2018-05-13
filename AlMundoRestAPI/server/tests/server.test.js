const expect = require('expect')
const request = require('supertest')

const { app } = require('./../server');

const { HotelModel } = require('./../modules/hotelModel');

const { HotelService } = require('./../services/hotelServices');

const fakeHotels = [
    {  
        "id" :  1,
        "_id" :  1,
        "name": "A",
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
  },
  {  
    "id" :  2,
    "_id" :  2,
    "name": "B",
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
}
]

beforeEach((done) => {
    HotelModel.remove({}).then(() => {
        HotelModel.insertMany(fakeHotels);
    }).then(() => done());
});

describe('POST / Hotels', () => {
    it('Should create a new Hotel', (done) => {
        var req ={  
              "id" :  12345,
              "_id" :  12345,
              "name": "Fredoooooooo",
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
            .post('/almundo/hotel')
            .send( req  )
            .expect(200)
            .expect((res) => {
                expect((res.body.id)).toBe(req.id);
                expect((res.body.name)).toBe(req.name);
                expect((res.body.stars)).toBe(req.stars);
                expect((res.body.image)).toBe(req.image);
                expect((res.body.price)).toBe(req.price);
                expect((res.body.amenities.length)).toBe(req.amenities.length);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                HotelModel.find(req).then((hotel) => {
                    expect(hotel.length).toBe(1);
                    expect(hotel[0].id).toBe(req.id);
                    expect(hotel[0].id).toBe(req.id);
                    expect(hotel[0].name).toBe(req.name);
                    expect(hotel[0].stars).toBe(req.stars);
                    expect(hotel[0].image).toBe(req.image);
                    expect(hotel[0].price).toBe(req.price);
                    expect(hotel[0].amenities.length).toBe(req.amenities.length);
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

                HotelModel.find().then((hotel) => {
                    expect(hotel.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
    });

});


describe('PATCH / Hotels', () => {
    it('Should update a new Hotel', (done) => {
        var req ={  
              "id" :  12345,
              "name": "Test",
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
        var req ={  
              "id" :  12345,
              "name": "Test",
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
            .post('/almundo/hotel')
            .send( req  )
            .expect(200)
            .expect((res) => {
                expect(res.body.id).toBe(req.id);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }


                request(app)
                .delete('/almundo/hotel')
                .send( {"id" :  12345}  )
                .expect(200)
                .expect((res) => {
                    expect(res.body.id).toBe(req.id);
                })
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    HotelModel.find(req).then((hotel) => {
                        expect(hotel.length).toBe(0);
                        done();
                    }).catch((e) => done(e));
    
                    
                });

            });
    });
});