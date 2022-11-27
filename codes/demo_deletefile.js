var fs = require('fs');

fs.unlink('mydeletefile.txt', function(err){
    if (err) throw err;
    console.log('File deleted!');
});

//To delete a file with the file system module, use the fs.link() method.
//the fs.unlink() method deletes the specified file.
//in above code it deletes "mydeletefile.txt" file from the system.