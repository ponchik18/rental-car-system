const connection = require('../config/database');
const bcrypt = require('bcrypt');

const User = {};

User.create = async (userData,callback )=>{
    const createUserQuery = 'INSERT INTO users (fullname, email, password, role) values (? ,? ,? ,? )';
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    connection.query(createUserQuery, [userData.fullname, userData.email, hashedPassword, 'user'], callback);
}

User.getUser = (userData,callback )=>{
    const queryForGetUser = 'SELECT id, email, password, role FROM users WHERE email=?';
    connection.query(queryForGetUser, [userData.email], callback);
}

User.getUserById = (userDate, callback)=>{
    const queryForGetUser = 'SELECT id, email, password, role, fullname, birthday, phone, address, driving_experience, avatar_image_path FROM users WHERE id=?';
    connection.query(queryForGetUser, [userData.id], callback);
}

module.exports = User;