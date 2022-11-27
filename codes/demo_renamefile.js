var fs = require('fs');

fs.rename('mynewfile1.txt', 'mynewrenamedfile.txt', function(err){
    if (err) throw err;
    console.log('file was renamed. :)');
});


//to rename a file with file system module, use the fs.rename() method
// the fs.rename() method renames the specified file.