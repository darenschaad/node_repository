// https://www.npmjs.com/package/prompt

var prompt = require('prompt');
var colors = require('colors');

//bring in pong-pong.js
var ping_pong = require('./ping-pong.js');

/*
Also possible to import like this:
var pingPong = require('./ping-pong.js').pingPong;
by including '.pingPong' you can use the pingPong method in this file as just pingPong instead of ping_pong.pingPong
the .js file extension is optional
*/

//start the prompt
prompt.start();

prompt.message = colors.white("Hello, please enter a number \n");

// We call the prompt get method to tell it what information to prompt the user for. The first argument is a name for the input we want: the goal number for our pingPong function. The next argument to get is a function to run after the prompt is finished getting the goal number. This function allows for an error with its first parameter, err, and a result as its second parameter, which holds the input from our user. We put the rest of our code inside of this function, and then we can pass the goal number to our pingPong function using result.goal. If we try it out now, we'll be able to enter in any number we like for the goal.

//Get one property from the user; userInputNumber
prompt.get('userInputNumber', function(err, result){

	//pass the value of userInputNumber (result.userInputNumver) to the pingPong function
	//store result in variable resultArray
	var resultArray = ping_pong.pingPong(result.userInputNumber);

	console.log(colors.green('Command-line input received:'));

	//iterate through each element in the array, refer to each individual
	//element as resultElement
	resultArray.forEach(function(resultElement){

		//log resultElement to console
		console.log(colors.magenta(resultElement));
	});
});

// hard-coded input version for pingPong()
// console.log('Ping pinging up to 100');
// var result = pingPong(100);
// result.forEach(function(element){
// 	console.log(element);
// });