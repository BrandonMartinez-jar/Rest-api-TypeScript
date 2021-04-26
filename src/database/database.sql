create database la_granja;
use la_granja;

CREATE TABLE usuario(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(45) NOT NULL,
apellido VARCHAR(45) NOT NULL,
correo VARCHAR(100) NOT NULL,
contraseña TEXT NOT NULL);

CREATE TABLE telefono(
telefono VARCHAR(15) NOT NULL,
id_usuario INT NOT NULL,
FOREIGN KEY (id_usuario) REFERENCES usuario(id),
PRIMARY KEY (telefono,id_usuario));

CREATE TABLE pedido(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
via VARCHAR(3) NOT NULL,
n_via VARCHAR(10) NOT NULL,
casa VARCHAR(6) NOT NULL,
orientacion VARCHAR(2) NOT NULL,
telefono VARCHAR(15) NOT NULL,
id_usuario INT NOT NULL,
FOREIGN KEY (id_usuario) REFERENCES usuario(id));

CREATE TABLE productos(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(20) NOT NULL,
precio INT NOT NULL,
img TEXT NOT NULL,
beneficios TEXT NOT NULL);

CREATE TABLE carrito(
id_pedido INT NOT NULL,
id_producto INT NOT NULL,
cantidad INT NOT NULL,
subtotal INT NOT NULL,
FOREIGN KEY (id_pedido) REFERENCES pedido(id),
FOREIGN KEY (id_producto) REFERENCES productos(id),
PRIMARY KEY (id_pedido,id_producto));