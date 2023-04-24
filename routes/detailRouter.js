const express = require('express');
const detail = require('../controllers/detailController');

const detailRoute = express.Router();

detailRoute.get('/detail/:id',detail.renderDetail);

module.exports = detailRoute;