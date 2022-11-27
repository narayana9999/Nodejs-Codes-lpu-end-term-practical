//Node mailer Module
//the nodemailer module makes it easy to send emails from
//your computer.
//the nodemailer module can be downloaded and installed using npm.
var nodemailer = require('nodemailer');
//Send an email
//now you are ready to send emails from your server.
//use the username and password from your selected email provider to 
//send an email.

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'narayanjasthi@gmail.com',
        pass: 'Laxmi$9$'
    }
});

var mailOptions= {
    from: 'narayanjasthi@gmail.com',
    to:'bhargavsai0@gmail.com',
    subject:'Sending Email using Node.js',
    text: 'That was easy!'
    //html: '<h1>Welcome</h1><p>That was easy!</p>
};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log('Email sent:' + info.response);
    }
});
