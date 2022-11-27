var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = {address: "Eluru"};
    //var myquery = {address: /^S/}; //updates all documents where the name starts with the letter "S".
    var newvalues = { $set: {name:"Sravani P", address:"Eluru 1Town"}};
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res){
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});