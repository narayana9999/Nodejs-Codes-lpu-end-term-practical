//Node.js as a File Server
//the node.js file system module allows you to 
//work with the file system on your computer.

//To include the File System module, 
//use the require() method
var fs = require('fs');
var http = require('http');
http.createServer(function(req, res){
    fs.readFile('demofile1.html', function(err,data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);