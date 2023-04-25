exports.isAuthorized = function (req, res, next){
    if (!req.session.userId) {
        res.status(401).send({message:'Для продолжения вы должны авторизоваться в системе'});
        return;
    }
    next();
}
exports.requireRole = (role) => (req, res, next) => {
    if (req.session.userRole !== role) {
        res.status(403).send('Forbidden');
        return;
    }
    next();
};