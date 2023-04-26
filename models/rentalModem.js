const connection = require('../config/database');

const Rental = {};

Rental.createRental = (rentalData, callback)=>{
    let queryRental = 'INSERT INTO rentals (users_id, cars_id, pickup_date, return_date, extra_rent, total_price, request) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(queryRental, [rentalData.users_id, rentalData.cars_id, rentalData.pickup_date, rentalData.return_date, rentalData.extra_rent, rentalData.total_price, rentalData.request], callback);
}

Rental.checkAvailability = (rentalData, callback)=>{
    let queryRental = 'SELECT * FROM rentals WHERE ((pickup_date <= ?) AND (return_date >= ?))';
    connection.query(queryRental,[rentalData.return_date, rentalData.pickup_date], callback);
}

module.exports = Rental;