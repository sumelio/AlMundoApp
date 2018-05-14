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


### How to luanch this app

#### Installation requirements

- NodeJS v8 or later
- npm.

1. Enter to AlMundoWeb folder and execute this command:

```bash
/AlMundoWeb
```
2. Install modules:

```bash
$ npm install
```

3. Development server:

```bash
$ ng serve --port 4200
```

*NOTA:* By default the port is 4200 ```http://localhost:4200```

 [Show detail of AlMaundoWeb (FrontEnd)](../Branch_connect_to_mongoDB/AlMundoWeb/README.md)

## BackEnd

This Rest API has four methods:

| Method  | url  | Description  |
|---|---|---|
| GET  |  /almundo/hotel?name=[name]&stars=[stars] | Get hotels by *name*: Hotel name, *stars*: star numbers|
| POST  |  /almundo/hotel | Create a hotel  |
| PATH  | /almundo/hotel  | Update a hotel  |
| DELETE  |  /almundo/hotel | Remove a hotel  |

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

3. Development express server:

Linux
```bash
$ export PORT_NODE_SERVER=3000 && npm start
```
Windows
```bash
$ set PORT_NODE_SERVER=3000 && npm start
```

*NOTA:* By default  the port is 3000 ```http://localhost:3000```

[Show detail of AlMundoRestAPI (BackEnd)](../Branch_connect_to_mongoDB/AlMundoRestAPI/README.md)
