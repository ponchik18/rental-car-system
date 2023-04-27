const express = require('express');
const rental = require('../controllers/rentalController');
const { requireRole } = require('../middleware/authMiddleware');
const rentalRouter = express.Router();

rentalRouter.get('/rental',requireRole('user') ,rental.renderRental);
rentalRouter.post('/rental/change-status', requireRole('user'),rental.changeStatus);

module.exports = rentalRouter;