var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
//first middleware before response is sent
app.use(function(req,res,next){
    console.log("start");
    next();
});

//Route handler
app.get('/', function (req, res) {  
    res.sendFile( __dirname + "/" + "operations.html" );  
 });

 app.post('/saveData', function(req, res) {
    var first = parseInt(req.body.num1);
    var second = parseInt(req.body.num2);
     var sum = Number(first+ second);
     var diff = Number(first-second);
     var mul = Number(first * second);
     var div = Number(first / second);
     res.send('The sum is: ' + Number(sum) + ' The difference is: '+ 
     Number(diff) + ' The multiplication is: ' + Number(mul) +' The division is: ' + Number(div));
      
 })
app.use('/saveData',function(req, res){
    console.log('End');
});

app.listen(3000);
