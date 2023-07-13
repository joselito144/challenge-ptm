-- Crear la Base Datos

CREATE DATABASE crud_app;


-- Crear tablas

CREATE TABLE Productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  descripcion VARCHAR(255),
  precio DECIMAL(10,2)
);