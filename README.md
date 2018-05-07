# AlMundoApp

Esta aplicación esta compuesta de dos componentes:
1. AlMundoRestAPI: Es un servicio el cual expone una API Rest que permite consultar la información de algunos hoteles, permitiendo realizar la búsqueda por nombre y cantidad de estrellas.
2. AlMundoWeb: Es un proyecto en Angular 5 que contiene toda la parte de frontend de la aplicación y tiene tres componente:
- **Componente Hotels** : El cual se comunica con el **HotelService** para consultar el RestAPI (*AlMundoRestAPI*) y luego realiza el pintado de cada uno de los componentes Hotel.
- **Componente Hotel**: Contiene el detalle del hotel, es decir, una imagen, nombre cantidad de estreñas, amenities y precio.
- **Component Filter**: Contiene el html que permite realizar la búqueda o filtrado del listado de hoteles por nombre y cantidad de estreñas del hotel.

##¿Como ejecutar esta aplicación?
### Requisitos de instalación

- Tener instalado:
1. nodeJS en la versión: v8.11.1
2. CLI de Angular version 5.

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

En la consola debe aparece este mensaje:

```bash 
> almundorestapi@1.0.0 start .../AlMundoRestAPI
> node server.js

Server AlMundoAPI is up on port 3000 ....

```

### AlMundoWeb
Para subir la aplicación en Angular realizar los siguientes pasos:

1. Ingresar a la carpeta AlMundoRestAPI

```bash 
/AlMundoWeb
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
> al-mundo-web@0.0.0 start /home/..../AlMundoWeb
> ng serve


....
....
chunk {styles} styles.bundle.js (styles) 365 kB [initial] [rendered]
chunk {vendor} vendor.bundle.js (vendor) 11.1 MB [initial] [rendered]

webpack: Compiled successfully.


```

La página ahora debe estar disponible por el puerto 4200 http://localhost:4200/ :


![https://github.com/sumelio/AlMundoApp/blob/master/resources/webPage.png](https://github.com/sumelio/AlMundoApp/blob/master/resources/webPage.png)
 


![https://github.com/sumelio/AlMundoApp/blob/master/resources/mobile.png](https://github.com/sumelio/AlMundoApp/blob/master/resources/mobile.png)
 
