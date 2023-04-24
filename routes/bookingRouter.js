const express = require('express');
const booking = require('../controllers/bookingController');

const bookingRoute = express.Router();

bookingRoute.get('/booking/:id',booking.renderBooking);

module.exports = bookingRoute;