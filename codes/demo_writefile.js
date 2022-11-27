var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Narayana Jasthi', function(err){
    if (err) throw err;
    console.log('Saved!');
});


//the fs.writeFile() method replaces the specifed file and content if it exists.
//if the file does not exist, a new file, containing the specified content,
// will be created.