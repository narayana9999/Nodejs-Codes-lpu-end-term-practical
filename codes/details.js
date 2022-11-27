var fs =require('fs');

fs.writeFileSync('StudentDetails.txt','reg.no:11915949, LakshmiNarayana, B+',function(error){
    if (error){throw error}
    else{
    console.log('saved successfully');
    };
});