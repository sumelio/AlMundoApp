# AlMundoRestAPI

## Methods REST API

### GET 
### POST
### PATCH
### DELETE



## Node modules

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

## How to launch this web service:

#### Installation requirements

- NodeJS v8.11.1 or later.
- npm.
- mongoDB.

1. Enter to AlMundoRestAPI folder and execute this command:

```bash
/AlMundoRestAPI
```
2. Install modules:

```bash
$ npm install
```

3. Execute to start express server:

```bash
$ npm start
```
*NOTA: By default  the port is 3000 http://localhost:3000 *


- In order to run the tests, execute this command

```bash
$ npm run test-watch
```
*NOTA: MongoDB should be run (locahost, port 27017)*

If you want to change configuration in order to connect to MongoDB, you can include the settings variable:

Example Linux:
```bash
exports NODE_ENV=MyEnvTest

exports MONGO_DB_CONNECTION=mongodb://192.168.0.18:27017/dbAlMundoTest
```


