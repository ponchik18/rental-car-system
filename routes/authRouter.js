const express = require('express');
const auth = require('../controllers/authController');

const authRouter = express.Router();

authRouter.post('/auth/register',auth.createUser);
authRouter.post('/auth/enter',auth.enterUser);
authRouter.get('/auth/logout', auth.logout);

module.exports = authRouter;