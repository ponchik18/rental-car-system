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

-- Table: carList.ejs
CREATE TABLE cars (
    id int  NOT NULL AUTO_INCREMENT,
    brands_id int  NOT NULL,
    model varchar(50)  NOT NULL,
    description text  NOT NULL,
    picture_path varchar(50)  NOT NULL,
    body_type varchar(50)  NOT NULL,
    engine_capacity float  NOT NULL,
    fuel varchar(50)  NOT NULL,
    transmission varchar(30)  NOT NULL,
    city_fuel_consumption float(5,2)  NOT NULL,
    highway_fuel_consumption int  NOT NULL,
    status nvarchar(30)  NOT NULL,
    number_of_seats int  NOT NULL,
    engine_power int  NOT NULL,
    mileage int NOT NULL,
    year int  NOT NULL,
    price_per_hour float NOT NULL,
    price_per_day float NOT NULL,
    more_photo_dir varchar(50) NOT NULL,
    UNIQUE INDEX cars_ak_name (model),
    CONSTRAINT cars_pk PRIMARY KEY (id)
);

-- Table: rentals
CREATE TABLE rentals (
    id int  NOT NULL AUTO_INCREMENT,
    cars_id int  NOT NULL,
    users_id int  NOT NULL,
    pickup_date datetime  NOT NULL,
    return_date datetime  NOT NULL,
    total_price float(10,2)  NOT NULL,
    extra_rent int  NOT NULL,
    request text NULL,
    `status` varchar(30) default 'Подтверждёна',
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
    fullname varchar(90)  NOT NULL,
    birthday date  NULL,
    phone varchar(20)  NULL,
    address varchar(100)  NULL,
    driving_experience int  NULL,
    avatar_image_path VARCHAR(255) NULL,
    CONSTRAINT users_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: cars_brands (table: carList.ejs)
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

-- alter table carList.ejs add column more_photo_dir varchar(50) NOT NULL;
-- ALTER TABLE carList.ejs MODIFY COLUMN engine_capacity FLOAT;
-- ALTER TABLE users ALTER COLUMN avatar_image_path VARCHAR(255) NULL;

 -- INSERT VALUE
 INSERT INTO brands (brand_name) VALUES ('Alfa Romeo');
 INSERT INTO cars (brands_id, model, description, picture_path, body_type, engine_capacity, fuel, transmission, city_fuel_consumption, highway_fuel_consumption, status, number_of_seats, engine_power, mileage, year,price_per_hour,price_per_day)
VALUES ((SELECT id FROM brands WHERE brand_name = 'Alfa Romeo'), 'Giulia Quadrifoglio', 'Alfa Romeo Giulia Quadrifoglio - это спортивный седан высокой производительности с двигателем V6 с двойным турбонаддувом объемом 2,9 литра, который развивает 505 лошадиных сил и 443 фунт-футов крутящего момента. Эта машина умеет ускоряться до 60 миль в час менее, чем за 4 секунды, а ее максимальная скорость составляет 191 миль в час. Она оснащена карбоновым капотом, крышей и задним спойлером, что снижает вес и повышает аэродинамические характеристики. Интерьер машины выполнен из высококачественных материалов и оснащен передовыми технологиями. Alfa Romeo Giulia Quadrifoglio - идеальный выбор для любителей скорости и стиля. Если вы хотите арендовать этот автомобиль, вы можете сделать это на нашем сайте по аренде машин.', 'Alfa Romeo Giulia Quadrifoglio.png', 'Sedan', 2891, 'Бензин', 'Автомат', 12.7, 5.7, 'Доступна', 5, 505, 10000, 2020,58.80 ,395.65);

SELECT cars.id, brands.brand_name, mileage, model, description, picture_path, body_type, engine_capacity, fuel, transmission, city_fuel_consumption, highway_fuel_consumption, status, number_of_seats, engine_power, year, price_per_day, price_per_hour FROM cars inner join brands on brands.id = cars.brands_id;