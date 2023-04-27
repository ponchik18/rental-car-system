const express = require('express');
const multer = require('multer');
const admin = require('../controllers/adminContoller');
const path = require("path");
const {  requireRole } = require('../middleware/authMiddleware');
const upload = multer();
const adminRouter = express.Router();

adminRouter.use( requireRole('admin'));

adminRouter.get('/admin',admin.renderAdmin);
adminRouter.post('/admin/updateCarStatus', admin.updateCarStatus);
adminRouter.post('/admin/addNewCar',upload.fields([{ name: 'cover', maxCount:1 }, { name: 'booking_page',maxCount:1 }]),  admin.addNewCar);
adminRouter.get('/admin/get-car/:id', admin.getCar);
adminRouter.post('/admin/update/car/:id', admin.updateCar);
adminRouter.post('/admin/addNewBrand', admin.addNewBrand);
adminRouter.post('/admin/updateRentalStatus', admin.updateRentalStatus);

module.exports = adminRouter;