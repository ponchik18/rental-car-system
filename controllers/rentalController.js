const Rental = require('../models/rentalModem');
const Car = require("../models/carModel");

exports.renderRental = (req, res)=>{
    Rental.getUserRental(req.session.userId, (error, rentals)=>{
        if (error) {
            console.log('Error in reading rental.ejs: ', error);
            res.status(500).json({error: 'Error creating user'});
        }
        else{
            let isAuthenticated = !!req.session.userId;
            res.render('../views/pages/rental', {rentals:rentals, isAuthenticated:isAuthenticated});
        }
    });
}
exports.changeStatus = (req, res)=>{
    const rentalData = {
        id:req.body.rental_id,
        status: req.body.status
    }
    Rental.changeStatus(rentalData, (err, callback)=>{
        if (err) {
            console.error(err);
            return res.status(500).json({
                status:500,
                message: 'Ошибка отмена брони!'
            });
        }
        return res.status(201).json({
            status:201,
            message: 'Аренда успешно отменена!'
        });
    })
}
