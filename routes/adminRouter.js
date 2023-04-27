const express = require('express');
const multer = require('multer');
const admin = require('../controllers/adminContoller');
const path = require("path");
const upload = multer();
const adminRouter = express.Router();

adminRouter.get('/admin',admin.renderAdmin);
adminRouter.post('/admin/updateCarStatus', admin.updateCarStatus);
adminRouter.post('/admin/addNewCar',upload.fields([{ name: 'cover', maxCount:1 }, { name: 'booking_page',maxCount:1 }]),  admin.addNewCar);
adminRouter.get('/admin/get-car/:id', admin.getCar);
adminRouter.post('/admin/update/car/:id', admin.updateCar);
adminRouter.post('/admin/addNewBrand', admin.addNewBrand);

module.exports = adminRouter;