const express = require('express');
const carList = require('../controllers/carListController');

const carListRouter = express.Router();

carListRouter.get('/carlist',carList.renderCarList);

module.exports = carListRouter;