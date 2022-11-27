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
            let Fn=parsedData.split("=")[1];
            //console.log(finalData);
            var flag = 0;
            if (Fn == 0 || Fn == 1){
                res.end("0 and 1 are neither prime nor composite");
            }

            for (i = 2; i <= 
                Fn / 2; ++i) {
                if (Fn % i == 0) {
                  flag = 1;
                }
              }
            
            if (flag == 0 ){
                res.end(Fn + " is Prime" );
            } else {
                res.end(Fn + " is not prime");
            }
             
        })
    }
})
server.listen(3000);