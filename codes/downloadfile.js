var express= require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const download = require('download');

app.get('/', function (req, res) {  
    res.sendFile( __dirname + "/" + "download.html" );  
 });
// Url of the image

app.post('/download', function(req, res) {

    const file = __dirname + "/"+ req.body.txtfile +".txt";
    // Path at which image will get downloaded
    const filePath = `${__dirname}/Question1`;
      
    download(file,filePath)
    .then(() => {
        console.log('Download Completed');
    })
 })
app.listen(3000); 