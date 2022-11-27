var events = require('events');
var eventEmitter = new events.EventEmitter();
var express = require('express');
var app = express();
const prompt = require('prompt-sync')();
//you can assign event handlers to your own events with the eventemitter object
//in the example below we have created a function that will be executed when a
//"scream" event is fired.
//to fire an event, use the emit() method.

//create an event handler:
var myEventHandler = function(req, res){
     
    let F = prompt("enter the F to convert into C:");
    C = (F-32)*(5/9);
    console.log(C);
}
//Assign the event handler to an event:
eventEmitter.on('convert', myEventHandler);
//fire the scream event:
eventEmitter.emit('convert')

app.listen(2000);