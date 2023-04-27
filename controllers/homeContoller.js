const Car = require('../models/carModel');

exports.renderHome = (req,res)=>{
    Car.getAllAvailableCar(true, (error, results)=>{

        if (error) {
            console.log('Error in reading carList.ejs: ', error);
            res.status(500).json({error: 'Error creating user'});
        }
        else{
            console.log(results);
            let isAuthenticated = !!req.session.userId;
            console.log(isAuthenticated);
            res.render('../views/pages/index', {results:results, isAuthenticated:isAuthenticated});
        }
    });
}
