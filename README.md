[![Build Status](http://54.184.109.104:8080/api/badges/vickpalomo/backend_test_resuelve/status.svg)](http://54.184.109.104:8080/vickpalomo/backend_test_resuelve)

[![Quality Gate Status](http://54.184.109.104:9000/api/project_badges/measure?project=vickpalomo%3Abackend_test_resuelve&metric=alert_status)](http://54.184.109.104:9000/dashboard?id=vickpalomo%3Abackend_test_resuelve)

# Prueba Backend Ingenieria Resuelve

_Api desarrollada con node y express para resolver la prueba de backend de ingenieria resuelve_

## Comenzando 🚀

_Clona el repositorio del proyecto_
```
  git clone git@github.com:vickpalomo/backend_test_resuelve.git
```

### Pre-requisitos 📋

* Docker version 19.03.11
* docker-compose version 1.11.2
* node ^v10.21.0
* npm ^6.14.4

### Configuración 🔧

_Para ejecutar el proyecto con nodejs_

* Instalar dependencias del proyecto

```
  npm install
```

* Levantar el proyecto usando nodemon, este paquete le permitira reiniciar el servidor cada vez que detecte un cambio en los archivos
```
  npm run start
```

### Configuración con Docker 🔧

* Dentro de la carpeta del proyecto ejecute
```
  docker-compose up
```

* El servidor se levanta en el puerto 3001
```
  http://localhost:3001
```

## Ejecutando las pruebas ⚙️

* Para realizar las pruebas automatizadas, ejecute
```
  npm run test
```

## Consultando los endpoints ⚙️

_El proyecto tiene un endpoint que recibe el json con los datos para calcular el sueldo completo de los jugadores_

* Realice un post a la siguiente url

```
  POST http://localhost:3001/salary/calculateSalary
```

* El proyecto esta hosteado en un vps de aws, puede hacer peticiones a la siguiente url:
```
  POST http://54.184.109.104/resuelve/salary/calculateSalary
```

* La documentación del codigo del proyecto la encuentra en:
```
  GET http://54.184.109.104/resuelve/documentation/
```

* La documentación de la API la encuentra en:
```
  GET http://54.184.109.104/resuelve/api-documentation/
```

## Construccion CD/CI 🛠️

_El proyecto construye una imagen docker, siguiendo un pipeline hecho con drone.io, se conecta aun servidor de sonarqube para hacer analisis de codigo y por ultimo sube la imagen al docker hub para que sea visible para cualquier persona._

* [Drone](https://docs.drone.io/) - Servidor CI/CD.
* [Sonarqube](https://docs.sonarqube.org/latest/) - Servidor para analisis de Codigo y Seguridad.
* [Docker Hub](https://hub.docker.com/) - Usado como repositorio de Imagenes

## Autores ✒️

* **Victor Manuel Palomo Yama** - *Backend Developer* - [vickpalomo](http://github.com/vickpalomo)

