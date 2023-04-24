const Car = require('../models/carModel');

exports.renderDetail = (req,res)=>{
    const car_id = req.params.id;
    Car.getCarByID(car_id, (error, results)=>{

        if (error) {
            console.log('Error in reading carList.ejs: ', error);
            res.status(500).json({error: 'Error creating user'});
        }
        else{
            res.render('../views/pages/detail', {car:results[0]});
        }
    });
}
