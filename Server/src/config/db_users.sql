CREATE DATABASE dbusers;

USE dbusers;

CREATE TABLE users (
    Id         VARCHAR(80) NOT NULL,
    Dni        VARCHAR(20) NOT NULL UNIQUE,
    Name       VARCHAR(30) NOT NULL,
    LastName   VARCHAR(30) NOT NULL,
    Email      VARCHAR(30) NOT NULL UNIQUE,
    Phone      VARCHAR(20) NOT NULL,
    CreateDate DATETIME    NOT NULL,
    PRIMARY KEY(Id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;