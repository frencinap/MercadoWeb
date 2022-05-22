-- archivo referencial, el proceso se hizo en DBeaver

create database mercadoweb;

create table productos( id serial primary key, imagen varchar, nombre varchar, precio int);

insert into productos(imagen,nombre,precio) values('banana.png','Bananas',960),
('cebollas.png','Cebollas',1200), ('lechuga.png','Lechuga',750),('papas.png','Papas',800),
('pimenton.png','Pimenton',900),('tomate.png','Tomate',1300);
