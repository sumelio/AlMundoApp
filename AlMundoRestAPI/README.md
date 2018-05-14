# AlMundoRestAPI

## Methods REST API

### GET 

URL ``` GET /almundo/hotel?name=[NAME]&stars=[STARS] ```

**Description:** Get the hotel list by name or/and stars number.

Example:

*Request* 
  ```bash
  http://localhost:3000/almundo/hotel?name=Lima Hotel&stars=5
  ```
  
*Response*
  ```bash
  [
    {
        "amenities": [
            "restaurant",
            "garden",
            "safety-box",
            "newspaper",
            "beach-pool-facilities"
        ],
        "_id": 26396,
        "id": 26396,
        "name": "Country Club Lima Hotel",
        "stars": 5,
        "price": 3109.07,
        "image": "115596_172_b.jpg",
        "__v": 0
    },
    {
        "amenities": [
            "safety-box",
            "kitchen-facilities",
            "bathrobes",
            "fitness-center",
            "coffe-maker"
        ],
        "_id": 239178,
        "id": 239178,
        "name": "The Westin Lima Hotel & Convention Center",
        "stars": 5,
        "price": 3268.52,
        "image": "4359018_144_b.jpg",
        "__v": 0
    }
]
  ```

### POST

URL ``` POST /almundo/hotel ```

**Description:** Create a new hotel 

Example:

*Request* 

  ```json
{
        "id" :  "1",
          "name": "My new Hotel",
          "stars" : 15,
          "price" : 232.111,
          "image" : "https://upload.wikimedia.org/wikipedia/commons/3/3d/Greek_Isles_Hotel.JPG",
          "amenities" : [
          "safety-bddddox",
          "nightclub",
          "deep-soaking-bathtub",
          "beach",
          "business-center"
        ]
}
  ```
  
*Response*
  ```bash
  {
    "amenities": [
        "safety-bddddox",
        "nightclub",
        "deep-soaking-bathtub",
        "beach",
        "business-center"
    ],
    "_id": 1,
    "id": 1,
    "name": "My new Hotel",
    "stars": 15,
    "price": 232.111,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Greek_Isles_Hotel.JPG",
    "__v": 0
}
  ```
  
### PATCH


URL ```PATCH /almundo/hotel?name=[NAME]&stars=[STARS] ```

**Description:** Update a hotel (The hotel id should be store in database)
Example:

*Request* 
  ```json
  {
        "id" :  "1",
          "name": "My new Hotel has changed",
          "stars" : 10,
          "price" : 432.111,
          "image" : "https://upload.wikimedia.org/wikipedia/commons/3/3d/Greek_Isles_Hotel.JPG",
          "amenities" : [
          "safety-bddddox",
          "nightclub",
          "deep-soaking-bathtub",
          "beach",
          "business-center"
        ]
}
  ```
  
*Response*
  ```bash
 {
    "amenities": [
        "safety-bddddox",
        "nightclub",
        "deep-soaking-bathtub",
        "beach",
        "business-center"
    ],
    "_id": 1,
    "id": 1,
    "name": "My new Hotel has changed",
    "stars": 10,
    "price": 432.111,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Greek_Isles_Hotel.JPG",
    "__v": 0
}
  ```
  
### DELETE


URL ```DELETE /almundo/hotel```

**Description:** Remove a hotel
Example:

*Request* 
  ```json
  {
        "id" :  "1"
}
  ```
  
*Response*
  ```bash
 {
    "amenities": [
        "safety-bddddox",
        "nightclub",
        "deep-soaking-bathtub",
        "beach",
        "business-center"
    ],
    "_id": 1,
    "id": 1,
    "name": "My new Hotel has changed",
    "stars": 10,
    "price": 432.111,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Greek_Isles_Hotel.JPG",
    "__v": 0
}
  ```
  


## How to launch this web service:

#### Installation requirements

- NodeJS v8.11.1 or later.
- npm.
- mongoDB should be run (locahost, port 27017).

1. Enter to AlMundoRestAPI folder and execute this command:

```bash
/AlMundoRestAPI
```
2. Install modules:

```bash
$ npm install
```

This API Rest has been built using the following node modules:
 ```json 
  "dependencies": {
    "body-parser": "^1.18.2",
    "cors": "^2.8.4",
    "expect": "^22.4.3",
    "express": "^4.16.3",
    "mocha": "^5.1.1",
    "mongodb": "^3.0.8",
    "mongoose": "^5.1.0",
    "nodemon": "^1.17.4",
    "supertest": "^2.0.0"
  }
```

 
3. In order to run the tests, execute this command

```bash
$ npm run test-watch
```

4. To start express server:

```bash
$ npm start
 ```

This app by default uses port 4200.(http://localhost:4200)

If you want to change the configuration in order to connect to MongoDB, you can include the settings variable:

Example Linux:
```bash
exports NODE_ENV=MyEnvTest

exports MONGO_DB_CONNECTION=mongodb://192.168.0.18:27017/dbAlMundoTest
```


