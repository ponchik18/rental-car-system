const connection = require('../config/database');

const Brand = {};

Brand.create = (brand_name,callback )=>{
    let queryCreate = 'INSERT INTO brands (brand_name) VALUES (?)';
    connection.query(queryCreate,[brand_name], callback);
}

Brand.getAllBrand = (callback) =>{
    let queryForAll = 'SELECT id, brand_name FROM brands';
    connection.query(queryForAll, callback);
}

module.exports = Brand;