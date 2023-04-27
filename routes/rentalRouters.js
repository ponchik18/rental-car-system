const express = require('express');
const rental = require('../controllers/rentalController');

const rentalRouter = express.Router();

rentalRouter.get('/rental', rental.renderRental);
rentalRouter.post('/rental/change-status', rental.changeStatus);

module.exports = rentalRouter;