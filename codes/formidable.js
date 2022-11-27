//this is a very good module working with file uploads, called "Formidable".
//the Formidable module can be downloaded and installed using npm.

//
var http= require('http');
var formidable = require('formidable');
//Step:1 create a node.js file that writes an HTML form, with an upload field:

/*
 

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}).listen(8080);

*/
//step:2 Parse the uploaded file
//include the formidable module to be able to parse the uploaded file 
//once it reaches the server.


/*
http.createServer(function(req, res){
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            res.write('File uploaded');
            res.end();
        });
    }else {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);

*/
//step:3 save the file 
//when a file is successfully uploaded to the server, it is placed 
//on a temparary folder.
//the path to this directory can be found in the "files" object, passes as 
//the third argument in the parse() methods callback function.
//to move the file to the folder of your choice, use the file system module, and rename the file:

var fs= require('fs');

http.createServer(function(req, res){
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldpath= files.filetoupload.filepath;
            var newpath= 'D:/Notes/webdevelopment/Nodejs w3schools/' + files.filetoupload.orginalFilename;
            fs.copyFile(oldpath, newpath, function(err){
                if(err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(6969);