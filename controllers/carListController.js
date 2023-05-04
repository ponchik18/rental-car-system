const Car = require("../models/carModel");
let words;
exports.renderCarList = (req, res)=>{
    const queryLine = req.query.search_car;
    const sortLine =  req.query.sortValue;
    Car.getAllAvailableCar(false, queryLine,(error, results)=>{

        if (error) {
            console.log('Error in reading carList.ejs: ', error);
            res.status(500).json({error: 'Error creating user'});
        }
        else{
            if(queryLine!==undefined) {
                words = queryLine.split(" ");

                results.sort(compareFunction);
            }
            if(sortLine!== undefined){
                if(sortLine==='price_desc')
                    results.sort((a,b)=>b.price_per_day-a.price_per_day);
                else if(sortLine==='price_asc')
                    results.sort((a,b)=>a.price_per_day-b.price_per_day);
                else if(sortLine==='name')
                    results.sort((a,b)=>(a.brand_name+" "+a.model)>(b.brand_name+" "+b.model));
                else if(sortLine==='mileage')
                    results.sort((a,b)=>a.mileage-b.mileage);
            }
            let isAuthenticated = !!req.session.userId;
            res.render('../views/pages/carList', {results:results, isAuthenticated:isAuthenticated});
        }
    });
}

function compareFunction(a, b) {
    return countOfMatch(b) - countOfMatch(a);
}

function countOfMatch(car){
    let count=0;
    for(let i=0; i<words.length; i++)
        if(car.model.includes(words[i]) || car.brand_name.includes(words[i]))
            count++;
    return count;
}

