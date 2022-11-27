var http=require("http");
var fs= require('fs');
const { check, validationResult, oneOf } = require('express-validator'); 
const bodyparser = require('body-parser') 
app.use(bodyparser.urlencoded({ extended: false })) 
app.use(express.urlencoded());
var server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("<html>")
        res.write("<body>")
        res.write("<form action='/action1' method='POST'>");
        res.write("<pre>")
        res.write(" Enter your Name	 : <input type='text' name='name'> <br> ")
        res.write("Enter your Email : <input type='text' name='email'> <br> ")
        res.write("Enter your Number : <input type='number' name='mobile'> <br> ")
        res.write("Enter your Password : <input type='password' name='password'> <br>")
        res.write("Fill gender:<input type='radio' name='gender' value='male'>male<input type='radio' name='gender' value='female'>female<br>")
        res.write("<input type='submit' value='Submit Form'> ")
        res.write("</pre>")
        res.write("</form>")
        res.write("</body>")
        res.write("</html>")
        res.end();
    }
    if(req.url=='/action1' && req.method=='POST'){
        const errors = validationResult(req); 
	if (!errors.isEmpty()) { 
		res.on(errors) 
	} 

	else { 
        response = {  
            email:req.body.email,  
            name:req.body.name,
            mobile: req.body.mobile,
            password:req.body.password,
            gender:req.body.gender
           };  
           let data = JSON.stringify(response, null, 2);
           fs.writeFile('personalinfo.txt', data, function () { 
            console.log('Write operation complete.');
        });
        res.on("successfully submitted");

	} 
    }
})
server.listen(3000);