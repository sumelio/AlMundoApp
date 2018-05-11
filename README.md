# AlMundoApp

Esta aplicación esta compuesta de dos componentes:
1. **AlMundoRestAPI**: Es un servicio en *NodeJS* con  *express* el cual expone una API Rest que permite consultar la información de algunos hoteles, permitiendo realizar la búsqueda por nombre y cantidad de estrellas.
2. **AlMundoWeb**: Es un proyecto en Angular 5 que contiene toda la parte de frontend de la aplicación y tiene tres componente:
- **Componente Hotels** : El cual se comunica con el **HotelService** para consultar el RestAPI (*AlMundoRestAPI*) y luego realiza el pintado de cada uno de los componentes Hotel.
- **Componente Hotel**: Contiene el detalle del hotel, es decir, una imagen, nombre, cantidad de estreñas, amenities y precio del hotel.
- **Componente Filter**: Contiene los filtros para realizar la búsqueda búqueda de hoteles por nombre y cantidad de estrllas del hotel.


## ¿Como ejecutar esta aplicación?

### Requisitos de instalación

- Tener instalado:
1. NodeJS en la versión: v8.11.1 o superior.
2. Tene instalado *npm*.
3. Tener instalado *mongoDB*.


### Almacenar los hoteles en la bd de mongo

1. Ejecutar el siguiente comando
```bash
mongoimport --db dbAlMundo --collection collectionHotels --file [PATH_PROJECT ]]/AlMundoRestAPI/data/data.json --jsonArray
```
El resultado de este comando debe ser:

```bash
	connected to: localhost
	imported 100 documents
```

Se puede validar que la información esta almacenada con el siguiente comando:

```bash
$ mongo dbAlMundo
```

Y consultar la colección:

```mongo
> db.getCollection('collectionHotels').find({})
```

Si queremos filtrar por stars y nombre:

db.getCollection('collection_hotels').find( { "stars": { $in: [1,5] } , "name" : {'$regex' : '1', '$options' : 'i'}  } )  


Instalar drive

```bash
npm install mongodb --save
```

```bash
npm install mongoose@5.1.0 --save
```

```bash
npm install body-parser@1.18.2 --save
```

### AlMundoRestAPI
Para subir el servidor en NodeJS realizar los siguientes pasos:


1. Ingresar a la carpeta AlMundoRestAPI

```bash
/AlMundoRestAPI
```
2. Ejecutar la instalación de las dependencias del proyecto:

```bash
$npm install
```

3. Iniciar el servidor express de nodeJS:

```bash
$npm start
```

En la consola debe aparecer este mensaje:

```bash
> almundorestapi@1.0.0 start .../AlMundoRestAPI
> node server.js

Server AlMundoAPI is up on port 3000 ....

```

Ejemplo invocación servicio Rest

http://localhost:3000/almundo/hotels?name=L&stars='2,5'

Respuesta:

```json
[
   {
      "id":"266914",
      "name":"LYNIK La Casa de Blanca",
      "stars":2,
      "price":676.59,
      "image":"4846837_5_b.jpg",
      "amenities":[
         "deep-soaking-bathtub",
         "beach-pool-facilities",
         "bathtub",
         "separate-bredroom",
         "kitchen-facilities"
      ]
   },
   {
      "id":"266900",
      "name":"La Casa Nostra Hostel",
      "stars":2,
      "price":1228.5,
      "image":"2537805_1_b.jpg",
      "amenities":[
         "kitchen-facilities",
         "fitness-center",
         "garden",
         "nightclub",
         "deep-soaking-bathtub"
      ]
   }
]
```

### AlMundoWeb
Para subir la aplicación en Angular realizar los siguientes pasos:

1. Ingresar a la carpeta AlMundoWeb

```bash
/AlMundoWeb
```
2. Ejecutar la instalación de las dependencias del proyecto:

```bash
$npm install
```

3. Iniciar el servidor ng serve:

```bash
$npm start
```

En la consola debe aparecer este mensaje:

```bash
> al-mundo-web@0.0.0 start /home/..../AlMundoWeb
> ng serve
....
....
chunk {styles} styles.bundle.js (styles) 365 kB [initial] [rendered]
chunk {vendor} vendor.bundle.js (vendor) 11.1 MB [initial] [rendered]

webpack: Compiled successfully.


```
Para generar el **dist** para producción ejecutar el siguiente comando:

```bash
ng build --prod
```

La página ahora debe estar disponible por el puerto 4200 http://localhost:4200/ :

*Desktop*

![https://github.com/sumelio/AlMundoApp/blob/master/resources/webPage.png](https://github.com/sumelio/AlMundoApp/blob/master/resources/webPage.png)


*Mobile*

![https://github.com/sumelio/AlMundoApp/blob/master/resources/mobile.png](https://github.com/sumelio/AlMundoApp/blob/master/resources/mobile.png)
