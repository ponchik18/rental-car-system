const connection = require('../config/database');

const Brand = {};

Brand.create = (brand_name,callback )=>{
    let queryCreate = 'INSERT INTO brands (brand_name) VALUES (brand_name)';
    connection.query(queryCreate, callback);
}

Brand.getAllBrand = (callback) =>{
    let queryForAll = 'SELECT id, brand_name FROM brands';
    connection.query(queryForAll, callback);
}

module.exports = Brand;