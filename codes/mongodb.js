//Node.js can be used in database applications.
//One of the most popular NoSQL database is MongoDB.
//install mongodb package
//npm i mongodb
/*
var mongo = require('mongodb');
*/
//creating a Database
//to create a database in mongodb, start by creating a mongoClient object, then specify a 
//connection URL with the correct ip address and the name of the
//database you want to create.
//Mongodb will create the database if it does not exist, and make a connection to it.
//creating database named "db"

/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err,db){
    if (err) throw err;
    console.log("Database created :)");
    db.close();
});

*/

//In MongoDB, a database is not created untill it gets content.
//MonogDB waits untill you have created a collection (table), with at least one document(record)
//before it actually creates the database (and collection).
//Creating a collection
//To create a collection in MongoDB, use the createCollection() method.
//create a collection called "customers"

var MongoClient = require('mongodb').MongoClient;
var url= "mongodb://localhost:27017/";

MongoClient.connect(url,{useUnifiedTopology:true}, function(err, db){
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res){
        if (err) throw err;
        console.log("collection Created *");
        db.close();
    });
});