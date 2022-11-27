var http = require('http');

//create a server object:
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'text/html'});//http header
    res.write('Hello World!'); //write response to the client
    res.end(); //end the response
}).listen(8000); //server object listens on port 8000



//Add an http header
// if the response from the http server is supposed to be displayed as
// Html, you should include an http header with correct content type:
