const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'car_rental',
});

connection.connect((error) => {
    if (error) {
        console.log('Error connecting to database: ', error);
    } else {
        console.log('Connected to database.');
    }
});

module.exports = connection;