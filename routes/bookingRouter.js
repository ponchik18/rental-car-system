const express = require('express');
const booking = require('../controllers/bookingController');

const bookingRoute = express.Router();

bookingRoute.get('/booking/:id',booking.renderBooking);
bookingRoute.post('/addReviews',booking.leaveReview);
bookingRoute.post('/create/rental',booking.createRental);

module.exports = bookingRoute;