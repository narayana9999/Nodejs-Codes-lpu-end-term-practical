var fs= require('fs');
var http = require('http');

http.createServer(function(req,res){
    fs.appendFile('mynewfile1.txt', 'Hello content!', function(err){
        if (err) throw err;
        console.log('saved!');
    });
}).listen(2020);

//the fs.appendFile() method appends specified content 
// to a file. if the file does not exist, the file will 
//be created.