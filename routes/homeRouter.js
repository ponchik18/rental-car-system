const express = require('express');
const home = require('../controllers/homeContoller');

const homeRoute = express.Router();

homeRoute.get('/',home.renderHome);

module.exports = homeRoute;