const connection = require('../config/database');

const Car = {};

Car.create = (carData,callback )=>{

}

Car.getAllCar = (limit,callback) =>{
    let queryForAll = 'SELECT cars.id, brands.brand_name, mileage, model, description, picture_path, body_type, engine_capacity, fuel, transmission, city_fuel_consumption, highway_fuel_consumption, status, number_of_seats, engine_power, year, price_per_day, price_per_hour, more_photo_dir  FROM cars inner join brands on brands.id = cars.brands_id';
    if(limit===true)
        queryForAll+=' LIMIT 6';
    connection.query(queryForAll, callback);
}

Car.getCarByID = (id, callback)=>{
    let queryForCar = 'SELECT cars.id, brands.brand_name, mileage, model, description, picture_path, body_type, engine_capacity, fuel, transmission, city_fuel_consumption, highway_fuel_consumption, status, number_of_seats, engine_power, year, price_per_day, price_per_hour, more_photo_dir FROM cars inner join brands on brands.id = cars.brands_id where cars.id = ?';
    connection.query(queryForCar, [id], callback);
}

module.exports = Car;