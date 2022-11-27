//Node.js is perfect for event-driven applications
//Evetns in Node.js
//Every action on a computer is an event. Like when a 
//connection is made or a file is opened.
//objects in Node.js can fire events, like the readstream object
//fires events when opening and closing a file.
/*
var fs= require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open',function(){
    console.log("the file is open");

});

*/
// Events Module
//Node.js has a built-in module, called "Events", where you can create-,
//fire-, and listen for- your own events.
//To include the built-in events module use the require() method.
//in addition, all event properties and methods are an instance of an
//EventEmitter object. To be able to access these properties and methods,
//create an EventEmitter object.

var events = require('events');
var eventEmitter = new events.EventEmitter();

//you can assign event handlers to your own events with the eventemitter object
//in the example below we have created a function that will be executed when a
//"scream" event is fired.
//to fire an event, use the emit() method.

//create an event handler:
var myEventHandler = function(){
    console.log('I hear a scream :|');

}
//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
//fire the scream event:
eventEmitter.emit('scream');