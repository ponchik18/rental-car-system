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

User.getUserById = (userData, callback)=>{
    const queryForGetUser = 'SELECT id, email, password, role, fullname, birthday, phone, address, driving_experience, avatar_image_path FROM users WHERE id=?';
    connection.query(queryForGetUser, [userData.id], callback);
}
User.updatePhone = (userData, callback)=>{
    const queryUpdatePhone='UPDATE users SET phone = ? WHERE id=?';
    connection.query(queryUpdatePhone, [userData.phone, userData.id], callback);
}
User.getAllUser = ( callback)=>{
    const queryForGetUser = 'SELECT id, email, role, fullname, birthday, phone, address, driving_experience, avatar_image_path FROM users WHERE role=?';
    connection.query(queryForGetUser, ['user'], callback);
}

module.exports = User;