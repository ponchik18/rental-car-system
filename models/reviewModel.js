const connection = require('../config/database');

const Review = {};

Review.create =  (reviewData,callback )=> {
    const createUserQuery = 'INSERT INTO reviews (rating, comment, users_id, cars_id) values (? ,? ,? ,?)';
    connection.query(createUserQuery, [reviewData.rating, reviewData.comment, reviewData.user_id, reviewData.cars_id], callback);
}

Review.getReview = (cars_id,callback )=>{
    const reviewQuery = 'SELECT reviews.id, reviews.rating, reviews.comment, users.fullname,reviews.users_id, reviews.cars_id FROM reviews INNER JOIN users ON users.id=reviews.users_id WHERE reviews.cars_id=?';
    connection.query(reviewQuery, [cars_id], callback);
}

module.exports = Review;