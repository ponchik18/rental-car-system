const connection = require('../config/database');

const Car = {};

Car.create = (carData,callback )=>{

}

Car.getAllCar = (limit,callback) =>{
    let queryForAll = 'SELECT id, brands.brand_name, mileagem, model, description, picture_path, body_type, engine_capacity, fuel, transmission, city_fuel_consumption, highway_fuel_consumption, status, number_of_seats, engine_power, year FROM cars inner join brand on brand.id = car.brands_id';
    if(limit===true)
        queryForAll+=' LIMIT 6';
    connection.query(queryForAll, callback);
}