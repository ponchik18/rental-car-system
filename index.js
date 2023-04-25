const express = require('express');
const ejs = require('ejs');
const session = require('express-session');
const debug = require('debug');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const homeRouter = require('./routes/homeRouter');
const detailRouter = require('./routes/detailRouter');
const carListRoute = require('./routes/carListRouter');
const bookingRouter = require('./routes/bookingRouter');
const authRouter = require('./routes/authRouter');

const app = express();

//Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret: 'ASFSGF76GSDF7843GJFDS',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));
app.use(morgan('tiny'));

//Routers
app.use( homeRouter);
app.use(detailRouter);
app.use(carListRoute);
app.use(bookingRouter);
app.use(authRouter);

app.listen(5050);