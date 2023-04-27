const express = require('express');
const detail = require('../controllers/detailController');

const detailRouter = express.Router();

detailRouter.get('/detail/:id',detail.renderDetail);

module.exports = detailRouter;