const express = require('express');
const home = require('../controllers/homeContoller');

const homeRouter = express.Router();

homeRouter.get('/',home.renderHome);

module.exports = homeRouter;