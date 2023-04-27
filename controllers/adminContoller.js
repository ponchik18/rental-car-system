const Car = require('../models/carModel');
const Reviews = require('../models/reviewModel');
const User = require('../models/userModel');
const Rental = require('../models/rentalModem');
const Brand = require('../models/brandModem');
const sharp = require('sharp');
const path = require("path");

exports.renderAdmin = (req,res)=>{
    Car.getAllCar((err, cars)=>{
        Brand.getAllBrand((err, brands)=>{
            Rental.getAllRental((err, rentals)=>{
                User.getAllUser((err, users)=>{
                    res.render('../views/pages/admin', {cars:cars, brands:brands, rentals:rentals, users: users});
                });
            });
        });
    });
}
exports.getCar = (req, res)=>{
    Car.getCarByID(req.params.id,(err, car)=>{
        res.send(car[0]);
    })
}

exports.updateCar = (req, res)=>{
    const carData ={
        id: req.params.id,
        price_per_day:req.body.edit_price,
        description: req.body.edit_description,
        mileage: req.body.edit_mileage
    }
    Car.update(carData,(err, car)=>{
        if (err) {
            console.error(err);
            res.status(500).json({
                status:500,
                message: 'Ошибка изменение машины!'
            });
        }
        else {
            res.status(201).json({
                status: 201,
                message: 'Информация о машине успешно изменена!'
            });
        }
    })
}

exports.updateCarStatus = (req, res)=>{
    const carData = {
        id: req.body.car_id,
        status: req.body.status
    }
    Car.updateStatus(carData, (err, result)=>{
        if (err) {
            console.error(err);
            res.status(500).json({
                status:500,
                message: 'Ошибка изменение статуса!'
            });
        }
        else {
            res.status(201).json({
                status: 201,
                message: 'Статус успешно изменён!'
            });
        }
    })
}

exports.addNewCar = (req, res) => {
    const filenames =[];
    // Обрабатываем каждый файл
    const files = req.files;

    // Обработка загруженных файлов
    const file1 = files['cover'][0];
    const fileName1 =`${Date.now()}-${file1.originalname}`;
    const file2 = files['booking_page'][0];
    const fileName2 =`${Date.now()}-${file2.originalname}`;
    const carData = req.body;
    carData.picture_path = fileName1;
    carData.more_photo_path=fileName2;
    sharp(file1.buffer)
        .resize(500, 300)
        .toFile(path.join(__dirname, '../public/img/car_image', fileName1), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Ошибка при изменении размера файла 1');
            }

            sharp(file2.buffer)
                .resize(1366, 768)
                .toFile(path.join(__dirname, '../public/img/car_image', fileName2), (err) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send('Ошибка при изменении размера файла 2');
                    }
                    else{
                        Car.create(carData, (err, result)=>{
                            if (err) {
                                console.error(err);
                                res.status(500).json({
                                    status:500,
                                    message: 'Ошибка создания машины!'
                                });
                            }
                            else {
                                res.status(201).json({
                                    status: 201,
                                    message: 'Машина успешно создана!'
                                });
                            }

                        });
                    }
                });
        });
}

exports.addNewBrand = (req, res)=>{
    Brand.create(req.body.new_brand_name, (err, result)=>{
        if (err) {
            console.error(err);
            res.status(500).json({
                status:500,
                message: 'Ошибка изменение машины!'
            });
        }
        else {
            res.status(201).json({
                status: 201,
                message: 'Информация о машине успешно изменена!',
                id: result.insertId,
                brand_name: req.body.new_brand_name
            });
        }
    })
}