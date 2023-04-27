const express = require('express');
const booking = require('../controllers/bookingController');

const bookingRouter = express.Router();

bookingRouter.get('/booking/:id',booking.renderBooking);
bookingRouter.post('/addReviews',booking.leaveReview);
bookingRouter.post('/create/rental',booking.createRental);

module.exports = bookingRouter;