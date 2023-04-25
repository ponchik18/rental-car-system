const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.createUser = async (req,res)=>{
    const userData = {
        fullname: req.body.signname,
        email: req.body.signemail,
        password:req.body.signpass
    };
    console.log(req.body);
    await User.create(userData, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status:500,
                message: 'Ошибка при регистрации!'
            });
        }
        return res.status(201).json({
            status:201,
            message: 'Вы успешно зарегистрированы!'
        });
    });
}

exports.enterUser =  (req,res)=>{
    const userData = {
        email: req.body.logemail,
        password:req.body.logpass
    };
    User.getUser(userData, async (err, results)=>{
        if (results.length===0 || !await bcrypt.compare(userData.password, results[0].password)) {
            res.status(500).send({
                status:500,
                message: 'Логин или пароли не совпадают'
            });
        } else {
            req.session.userId = results[0].id;
            req.session.userRole = results[0].role;
            res.status(200).send({
                status:200,
                message: 'Вход в систему завершён успешно'
            });
        }
    });
}

exports.logout=(req, res) => {
    req.session.destroy();
    res.status(201).json({
        status:201,
        message: 'Вы успешно зарегистрированы!'
    });
}