const connection = require('../config/database');

const Car = {};

Car.create = (carData,callback )=>{
    let queryInsert='INSERT INTO cars (brands_id, model, description, picture_path, body_type, engine_capacity, fuel, transmission, city_fuel_consumption, highway_fuel_consumption, number_of_seats, engine_power, mileage, year, price_per_day, more_photo_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    connection.query(queryInsert, [carData.brands_id, carData.model, carData.description, carData.picture_path, carData.body_type, carData.engine_capacity, carData.fuel, carData.transmission, carData.city_fuel_consumption, carData.highway_fuel_consumption, carData.number_of_seats, carData.engine_power, carData.mileage, carData.year, carData.price_per_day, carData.more_photo_path], callback);
}

Car.getAllAvailableCar = (limit,callback) =>{
    let queryForAll = 'SELECT cars.id, brands.brand_name, mileage, model, description, picture_path, body_type, engine_capacity, fuel, transmission, city_fuel_consumption, highway_fuel_consumption, status, number_of_seats, engine_power, year, price_per_day, more_photo_path  FROM cars inner join brands on brands.id = cars.brands_id WHERE status=?';
    if(limit===true)
        queryForAll+=' LIMIT 6';
    connection.query(queryForAll,['Доступна'], callback);
}
Car.getAllCar = (callback) =>{
    let queryForAll = 'SELECT cars.id, brands.brand_name, mileage, model, description, picture_path, body_type, engine_capacity, fuel, transmission, city_fuel_consumption, highway_fuel_consumption, status, number_of_seats, engine_power, year, price_per_day, more_photo_path  FROM cars inner join brands on brands.id = cars.brands_id';
    connection.query(queryForAll, callback);
}


Car.getCarByID = (id, callback)=>{
    let queryForCar = 'SELECT cars.id, brands.brand_name, mileage, model, description, picture_path, body_type, engine_capacity, fuel, transmission, city_fuel_consumption, highway_fuel_consumption, status, number_of_seats, engine_power, year, price_per_day, more_photo_path FROM cars inner join brands on brands.id = cars.brands_id where cars.id = ?';
    connection.query(queryForCar, [id], callback);
}

Car.updateStatus =(carData, callback)=>{
    let queryForUpdate = 'UPDATE cars SET status = ? WHERE id = ?';
    connection.query(queryForUpdate, [carData.status,carData.id],callback);
}

module.exports = Car;