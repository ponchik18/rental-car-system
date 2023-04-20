const express = require('express');
const ejs = require('ejs');
const app = express();

app.listen(5050);

app.get('/', (req, res)=>{
    res.send('Hello world');
});