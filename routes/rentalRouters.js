const express = require('express');
const rental = require('../controllers/rentalController');

const rentalRoute = express.Router();

rentalRoute.get('/rental', rental.renderRental);

module.exports = rentalRoute;