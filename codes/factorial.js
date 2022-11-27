var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res){
    res.sendFile( __dirname + "/" + "factorial.html" )
});

app.post('/factorial', function(req, res){
    var num1 = req.body.num;
    var fac = 1;
    if (num1 == 0 || num1 == 1){
         fac
    } else {
        for(var i = num1; i > 1; i--){
            fac = fac * i;
         };
     res.send('Factorial of ' + num1 + " is " + Number(fac));
         
        }
})

app.listen(2000);