const Car = require("../models/carModel");

exports.renderCarList = (req, res)=>{
    Car.getAllCar(false, (error, results)=>{

        if (error) {
            console.log('Error in reading carList.ejs: ', error);
            res.status(500).json({error: 'Error creating user'});
        }
        else{
            console.log(results);
            res.render('../views/pages/carList', {results});
        }
    });
}