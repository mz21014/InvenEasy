# InvenEasy

## Descripción del Proyecto

InvenEasy es un sistema web desarrollado para la gestión y control de inventario de accesorios tecnológicos. El sistema permite administrar productos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar), facilitando el control de existencias y el seguimiento de inventario en tiempo real.

El proyecto fue desarrollado utilizando una arquitectura cliente-servidor, separando el frontend, backend y base de datos para mejorar la organización y escalabilidad del sistema.

---

# Tecnologías Utilizadas

## Frontend

* React
* Vite
* Axios
* CSS

## Backend

* Spring Boot 3
* Java 17
* Spring Data JPA
* Swagger / OpenAPI

## Base de Datos

* PostgreSQL

## Contenerización

* Docker
* Docker Compose

---

# Funcionalidades del Sistema

* Registrar productos
* Visualizar productos
* Editar productos
* Eliminar productos
* Actualización automática del stock
* API REST documentada con Swagger
* Persistencia de datos en PostgreSQL
* Despliegue completo mediante Docker Compose

---

# Arquitectura del Sistema

/backend
Contiene la lógica del negocio, API REST y conexión con PostgreSQL.

/frontend
Contiene la interfaz gráfica desarrollada en React.

/database
Contiene scripts, diagramas y recursos relacionados con la base de datos.

---

# Ejecución del Proyecto con Docker

## Requisitos

* Docker Desktop
* Docker Compose

## Ejecutar el proyecto

```bash
docker compose up --build
```

---

# Accesos del Sistema

## Frontend

http://localhost:3000

## Backend

http://localhost:8080/productos

## Swagger

http://localhost:8080/swagger-ui/index.html

---

# Endpoints Principales

| Método | Endpoint        | Descripción         |
| ------ | --------------- | ------------------- |
| GET    | /productos      | Obtener productos   |
| POST   | /productos      | Registrar producto  |
| PUT    | /productos/{id} | Actualizar producto |
| DELETE | /productos/{id} | Eliminar producto   |

---

# Integrantes

* Adriana Valeria Moreno Zetino — MZ21014
* Gerson Saúl Jiménez Cáceres — JC21002
* Jorge Ernesto López Rodríguez — LR22016
* Esmeralda Elizabeth Muñoz Funes — MF23004
* José Fernando González León — GL24021
