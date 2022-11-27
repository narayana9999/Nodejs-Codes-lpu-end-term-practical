//find one
//to select data from a collection in mongodb, we can use the 
//findone() method.
//then findone() method returns the first occurence in the selection.
//the first parameter of the findone() method is a query object. in thi example we use an empty query
//object, which selects all documents in a collection (but returns only the first document.)

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err,db){
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({},function(err, result){
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
});