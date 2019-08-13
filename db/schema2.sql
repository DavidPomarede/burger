### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
INSERT INTO burgers (name) VALUES ('Big Mac');
INSERT INTO burgers (name) VALUES ('Whopper');
INSERT INTO burgers (name, devoured) VALUES ('The Baconator', true);
INSERT INTO burgers (name, devoured) VALUES ('Filet-o-fish', true);
INSERT INTO burgers (name, devoured) VALUES ('Pickle Bomb', true);
INSERT INTO burgers (name) VALUES ('Quarter Pounder');
