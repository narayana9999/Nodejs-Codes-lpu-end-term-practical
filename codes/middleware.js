var express = require('express');
var app = express();

//first middleware before response is sent
app.use(function(req,res,next){
    console.log("start");
    next();
});

//Route handler
app.get('/', function(req,res,next){
    res.send("middle");
    next();
});

app.use('/',function(req, res){
    console.log('End');
});

app.listen(3000);