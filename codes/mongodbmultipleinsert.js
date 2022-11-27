var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        {name:'Narayana', address:'Tadepalligudem'},
        {name:'Kartheek', address:'Bheemavaram'},
        {name:'Bhargav', address:'Kmm'},
        {name:'Sai', address:'Kmm'},
        {name:'Sravani', address:'Eluru'},
        {name:'Srinu', address:'Kakinada'},
        {name:'Chaitanya', address:'Vijag'},
        {name:'Saahas', address:'Karimnagar'},
        {name:'Sathwik', address:'Kmm'},
        {name:'Prudhvi', address:'Kmm'}
    ];
    dbo.collection("customers").insertMany(myobj, function(err, res){
        if (err) throw err;
        console.log("Total " + res.insertedCount + " documents were inserted");
        db.close;
    });
});