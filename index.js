const express = require('express');
const ejs = require('ejs');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

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

app.get('/', (req, res)=>{
    res.render('pages/index');
});

app.listen(5050);