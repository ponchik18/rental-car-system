-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2023-04-20 15:37:41.025

-- tables
-- Table: brands
CREATE SCHEMA car_rental;
USE car_rental;

CREATE TABLE brands (
    id int  NOT NULL AUTO_INCREMENT,
    brand_name varchar(20)  NOT NULL,
    CONSTRAINT brands_pk PRIMARY KEY (id)
);

-- Table: cars
CREATE TABLE cars (
    id int  NOT NULL AUTO_INCREMENT,
    brands_id int  NOT NULL,
    model varchar(50)  NOT NULL,
    description text  NOT NULL,
    picture_path varchar(50)  NOT NULL,
    body_type varchar(50)  NOT NULL,
    engine_capacity int  NOT NULL,
    fuel varchar(50)  NOT NULL,
    transmission varchar(30)  NOT NULL,
    city_fuel_consumption float(5,2)  NOT NULL,
    highway_fuel_consumption int  NOT NULL,
    status nvarchar(30)  NOT NULL,
    number_of_seats int  NOT NULL,
    engine_power int  NOT NULL,
    mileage int NOT NULL,
    year int  NOT NULL,
    UNIQUE INDEX cars_ak_name (model),
    CONSTRAINT cars_pk PRIMARY KEY (id)
);

-- Table: rentals
CREATE TABLE rentals (
    id int  NOT NULL AUTO_INCREMENT,
    cars_id int  NOT NULL,
    users_id int  NOT NULL,
    pickup_date int  NOT NULL,
    return_date int  NOT NULL,
    total_price float(10,2)  NOT NULL,
    extra_rent int  NOT NULL,
    CONSTRAINT rentals_pk PRIMARY KEY (id)
);

-- Table: reviews
CREATE TABLE reviews (
    id int  NOT NULL AUTO_INCREMENT,
    rating float(3,1)  NOT NULL,
    comment text  NOT NULL,
    users_id int  NOT NULL,
    cars_id int  NOT NULL,
    CONSTRAINT reviews_pk PRIMARY KEY (id)
);

-- Table: users
CREATE TABLE users (
    id int  NOT NULL AUTO_INCREMENT,
    email varchar(50)  NOT NULL,
    password varchar(120)  NOT NULL,
    role varchar(20)  NOT NULL,
    firstname varchar(30)  NOT NULL,
    lastname varchar(30)  NOT NULL,
    birthday date  NULL,
    phone varchar(20)  NULL,
    address varchar(100)  NULL,
    driving_experience int  NULL,
    avatar_image_path int  NOT NULL,
    CONSTRAINT users_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: cars_brands (table: cars)
ALTER TABLE cars ADD CONSTRAINT cars_brands FOREIGN KEY cars_brands (brands_id)
    REFERENCES brands (id);

-- Reference: rentals_cars (table: rentals)
ALTER TABLE rentals ADD CONSTRAINT rentals_cars FOREIGN KEY rentals_cars (cars_id)
    REFERENCES cars (id);

-- Reference: rentals_users (table: rentals)
ALTER TABLE rentals ADD CONSTRAINT rentals_users FOREIGN KEY rentals_users (users_id)
    REFERENCES users (id);

-- Reference: reviews_cars (table: reviews)
ALTER TABLE reviews ADD CONSTRAINT reviews_cars FOREIGN KEY reviews_cars (cars_id)
    REFERENCES cars (id);

-- Reference: reviews_users (table: reviews)
ALTER TABLE reviews ADD CONSTRAINT reviews_users FOREIGN KEY reviews_users (users_id)
    REFERENCES users (id);

-- End of file.

