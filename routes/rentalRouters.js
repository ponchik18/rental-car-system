const express = require('express');
const rental = require('../controllers/rentalController');

const rentalRoute = express.Router();

rentalRoute.get('/rental', rental.renderRental);
rentalRoute.post('/rental/change-status', rental.changeStatus);

module.exports = rentalRoute;