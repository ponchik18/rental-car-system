const Car = require('../models/carModel');
const Reviews = require('../models/reviewModel');
const User = require('../models/userModel');
const Rental = require('../models/rentalModem');

exports.renderBooking = (req,res)=>{
    const car_id = req.params.id;
    const userData = {id:req.session.userId};
    Car.getCarByID(car_id, (error, results)=>{
        Reviews.getReview(car_id, (error, resReviews)=>{
            User.getUserById(userData, (error, users)=>{
                if (error) {
                    console.log('Error in reading Booking.ejs: ', error);
                    res.status(500).json({error: 'Error creating user'});
                }
                else{
                    let isAuthenticated = !!req.session.userId;
                    res.render('../views/pages/booking', {car:results[0],isAuthenticated:isAuthenticated, reviews:resReviews, user: users[0]});
                }
            });
        });
    });
}

exports.leaveReview = (req, res)=>{
    const reviewData = {
        user_id:req.body.user_id,
        cars_id:req.body.cars_id,
        rating: req.body.rating,
        comment: req.body.comment
    };
    Reviews.create(reviewData, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status:500,
                message: 'Ошибка добавлении отзыва!'
            });
        }
        return res.status(201).json({
            status:201,
            message: 'Отзыв успешно оставлен!'
        });
    });
}

exports.createRental = (req,res)=>{

    const rentalData = {
        cars_id: req.body.cars_id,
        users_id: req.body.users_id,
        pickup_date: new Date(req.body.pickupDate).toISOString().slice(0, 19).replace('T', ' '),
        return_date: new Date(req.body.returnDate).toISOString().slice(0, 19).replace('T', ' '),
        total_price: req.body.totalPrice,
        extra_rent: 0,
        request: req.body.request
    }
    Rental.checkAvailability(rentalData, (err, findRental)=>{
        if(findRental.length===0) {
            Rental.createRental(rentalData, (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({
                        status: 500,
                        message: 'Аренда не осуществлена!'
                    });
                }
                return res.status(201).json({
                    status: 201,
                    message: 'Автомобиль успешно арендован!'
                });
            });
        }
        else{
            return res.status(500).json({
                status: 500,
                message: 'На данное время уже есть аренда!'
            });
        }
    });


}