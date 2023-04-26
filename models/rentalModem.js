const connection = require('../config/database');

const Rental = {};

Rental.createRental = (rentalData, callback)=>{
    let queryRental = 'INSERT INTO rentals (users_id, cars_id, pickup_date, return_date, extra_rent, total_price, request) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(queryRental, [rentalData.users_id, rentalData.cars_id, rentalData.pickup_date, rentalData.return_date, rentalData.extra_rent, rentalData.total_price, rentalData.request], callback);
}

Rental.checkAvailability = (rentalData, callback)=>{
    let queryRental = 'SELECT * FROM rentals WHERE ((pickup_date <= ?) AND (return_date >= ?)) AND status<>?';
    connection.query(queryRental,[rentalData.return_date, rentalData.pickup_date, 'Отменена'], callback);
}

Rental.changeStatus = (rentalData, callback)=>{
    let queryRental = 'UPDATE rentals SET status=? WHERE id = ?';
    connection.query(queryRental,[rentalData.status, rentalData.id], callback);
}

Rental.getUserRental =  (user_id, callback)=>{
    const queryRental =  'SELECT rentals.cars_id, rentals.users_id, rentals.pickup_date, rentals.return_date, rentals.total_price, rentals.id, rentals.status, cars.model, brands.brand_name FROM rentals INNER JOIN cars on cars.id=rentals.cars_id INNER JOIN brands on brands.id=cars.brands_id WHERE users_id=?';
    connection.query(queryRental, [user_id], callback);
}

module.exports = Rental;