# AlMundoApp

This application has two parts: 

- **FrontEnd**: A web application with Angular 5 called AlMundoWeb.
- **BackEnd**: A Rest API service with NodeJS called AlMundoRestAPI.


Diagram:


	┌───────────────────────────────────────────────────────────────────────┐
	│                            AlMundoApp                                 │
	│                                                                       │
	│  ┌───────────────┐                    ┌───────────────┐               │
	│  │  AlMundoWeb   │                    │ AlMundoRestAPI│               │
	│  │  (FrontEnd)   │                    │   (BackEnd)   │               │
	│  │ ┌───────────┐ │ Resquest  Hotels   │ ┌───────────┐ │   ┌──────────┐│
	│  │ │Angular 5  │ │ ───────────────>   │ │ NodeJS    │ │   │          ││
	│  │ │ bootstrap │ │                    │ │  Express  │ │===│ MongoDB  ││
	│  │ │ karma     │ │  Response JSON     │ │  Mongoose │ │   │          ││
	│  │ │           │ │ <───────────────   │ │  Supertest│ │   │          ││
	│  │ └───────────┘ │                    │ └───────────┘ │   └──────────┘│
	│  └───────────────┘                    └───────────────┘               │
	└───────────────────────────────────────────────────────────────────────┘

## Frontend

This web application shows the hotel list:

|Mobile   | Desktop  |
|---|---|
|![https://github.com/sumelio/AlMundoApp/blob/master/resources/mobile.png](https://github.com/sumelio/AlMundoApp/blob/master/resources/mobile.png)|![https://github.com/sumelio/AlMundoApp/blob/master/resources/webPage.png](https://github.com/sumelio/AlMundoApp/blob/master/resources/webPage.png)|

![https://github.com/sumelio/AlMundoApp/blob/Branch_connect_to_mongoDB/AlMundoWeb/README.md](https://github.com/sumelio/AlMundoApp/blob/Branch_connect_to_mongoDB/AlMundoWeb/README.md)


## How to luanch this app

### Request for installation

a. NodeJS v8.11.1 or last.
b. npm.

1. Enter to AlMundoWeb file and execute this command:

```bash
/AlMundoWeb
```
2. Install modules:

```bash
$ npm install
```

3. Execute start angular:

```bash
$ ng serve
```

*NOTA*: By default the port is 4200 http://localhost:4200


## BackEnd

This rest api has four services:

| Method  | url  | Request  |   |   |
|---|---|---|---|---|
| GET  |  /almundo/hotel?name=[name]&stars=[stars] |  name: Hotel name, stars: star numbers|   |   |
| POST  |  /almundo/hotel |   |   |   |
| PATH  | /almundo/hotel  |   |   |   |
| DELETE  |  /almundo/hotel |   |   |   |

## How to luanch this web services:

### Request for installation

a. NodeJS v8.11.1 or laster.
b. npm.
b. mongoDB.


1. Enter to AlMundoRestAPI filder and execute this command:

```bash
/AlMundoRestAPI
```
2. Install modules:

```bash
$ npm install
```

3. Execute start angular:

```bash
$ npm start
```
*NOTA*: By default  the port is 3000 http://localhost:3000
