//var cookieParser = require('cookie-parser');
//app.use((cookieParser));

var express = require('express');
var app = express()

app.get('/', function(req,res){
    res.cookie('name', 'express').send('cookie set');
    console.log('Cookies: ', req.cookies);
});

app.listen(3000);

//res.cookie(name, 'value', {expire: 360000 + Date.now()});
//res.cookie(name, 'value', {maxAge: 360000});