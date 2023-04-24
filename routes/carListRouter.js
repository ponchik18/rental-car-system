const express = require('express');
const carList = require('../controllers/carListController');

const carListRoute = express.Router();

carListRoute.get('/carlist',carList.renderCarList);

module.exports = carListRoute;