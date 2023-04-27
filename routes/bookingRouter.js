const express = require('express');
const booking = require('../controllers/bookingController');
const { requireRole } = require('../middleware/authMiddleware');

const bookingRouter = express.Router();

bookingRouter.get('/booking/:id',booking.renderBooking);
bookingRouter.post('/addReviews',requireRole('user'),booking.leaveReview);
bookingRouter.post('/create/rental',requireRole('user'),booking.createRental);

module.exports = bookingRouter;