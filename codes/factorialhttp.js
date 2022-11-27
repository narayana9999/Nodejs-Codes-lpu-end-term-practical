var http=require("http");
var server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("<html>")
        res.write("<body>")
        res.write("<form action='/action1' method='POST'> <input type='number' plaeholder='Enter a number' name='name1'/> <input type='submit' value='submit'/> </form>")
        res.write("</body>")
        res.write("</html>")
        res.end();
    }
    if(req.url=='/action1' && req.method=='POST'){
        var data1=[];
        req.on("data",(chunks)=>{
            data1.push(chunks);
        })
        req.on("end",()=>{
            let parsedData=data1.toString();
            let finalData=parsedData.split("=")[1];
            //console.log(finalData);
            var fact=1;
            for(var i=1;i<=finalData;i++){
                fact=fact*i;
            }
            //console.log(fact);
            res.end("Factorial of a number is "+fact);
        })
    }
})
server.listen(3000);