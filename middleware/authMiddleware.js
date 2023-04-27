exports.isAuthorized = function (req, res, next){
    if (!req.session.userId) {
        res.status(401).send({message:'Для продолжения вы должны авторизоваться в системе'});
        return;
    }
    next();
}

exports.requireRole = (role) => (req, res, next) => {
    console.log("Need role"+role);
    console.log('My role'+req.session.userRole);
    console.log('Compare res ' +req.session.userRole !== role)
    if (req.session.userRole !== role) {
        res.send('<h1>403 - Доступ запрещен</h1>\n' +
            '  <p>Извините, у вас нет прав доступа к этой странице.</p>');
        return;
    }
    next();
};