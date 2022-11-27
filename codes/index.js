var express = require('express');
var app = express();
var things= require('./things');
/*
app.get('/hello', function(req,res){
    res.send('Hello world');
});
app.post('/hello', function(req, res){
    res.send("you just called the post method at /hello");
});
*/
app.use('/things', things);

app.listen(3000);
