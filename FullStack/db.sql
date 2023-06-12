CREATE DATABASE Alquilartemis;

USE Alquilartemis;

DROP TABLE IF EXISTS Cotizacion_Producto;
DROP TABLE IF EXISTS Cotizaciones;
DROP TABLE IF EXISTS Empleados;
DROP TABLE IF EXISTS Clientes;
DROP TABLE IF EXISTS Productos;
DROP TABLE IF EXISTS Constructoras;
DROP TABLE IF EXISTS Personas;

CREATE TABLE Personas(
    id_persona INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    telefono INT(20) NOT NULL,
    sexo VARCHAR(29) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_persona)
);

CREATE TABLE Constructoras(
    id_constructora INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_constructora)
);

CREATE TABLE Productos(
    id_producto INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    PRIMARY KEY(id_producto)
);

CREATE TABLE Clientes(
    id_cliente INT NOT NULL AUTO_INCREMENT,
    idetificador_persona INT,
    PRIMARY KEY(id_cliente),
    FOREIGN KEY (idetificador_persona) REFERENCES Personas(id_persona)
);

CREATE TABLE Empleados(
    id_empleado INT NOT NULL AUTO_INCREMENT,
    id_persona INT,
    usuario VARCHAR(30),
    password VARCHAR(255),
    id_constructora INT,
    PRIMARY KEY(id_empleado),
    FOREIGN KEY (id_persona) REFERENCES Personas(id_persona),
    FOREIGN KEY (id_constructora) REFERENCES Constructoras (id_constructora)
);

CREATE TABLE Cotizaciones(
    id_cotizacion INT NOT NULL AUTO_INCREMENT,
    id_cliente INT,
    id_empleado INT,
    duracion_alquiler INT NOT NULL,
    precio_total FLOAT(50) NOT NULL,
    fecha DATETIME NOT NULL,
    PRIMARY KEY(id_cotizacion),
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    FOREIGN KEY (id_empleado) REFERENCES Empleados(id_empleado)
);

CREATE TABLE Cotizacion_Producto(
    id_cotizacion_producto INT NOT NULL AUTO_INCREMENT,
    id_cotizacion INT,
    id_producto INT,
    PRIMARY KEY(id_cotizacion_producto),
    FOREIGN KEY (id_cotizacion) REFERENCES Cotizaciones(id_cotizacion),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

INSERT INTO Personas (nombre, telefono, sexo, direccion) 
VALUES ('John Doe', 1234567890, 'Masculino', '123 Main Street');

INSERT INTO Constructoras (nombre, direccion) 
VALUES 
('Marval', 'Tv. 72 #35-198, Bucaramanga'),
('Incomesa', 'PARADOR ALTAMIRA, Piedecuesta Los Santos')
;

INSERT INTO Empleados (id_persona, usuario, password, id_constructora) VALUES (1, 'Admin', '123', 1);

