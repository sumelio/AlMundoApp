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

This Rest API has four methods:

| Method  | url  | Description  |
|---|---|---|
| GET  |  /almundo/hotel?name=[name]&stars=[stars] | Get hotels by *name*: Hotel name, *stars*: star numbers|
| POST  |  /almundo/hotel | Create a hotel  |
| PATH  | /almundo/hotel  | Update a hotel  |
| DELETE  |  /almundo/hotel | Remove a hotel  |

## How to launch this web service:

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

3. Execute to start angular:

```bash
$ npm start
```
*NOTA*: By default  the port is 3000 http://localhost:3000
