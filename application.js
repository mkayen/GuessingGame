// GLOBAL VARIABLES

var randomNumber = Math.floor((Math.random() * 100) + 1);
var randomArray = [];
var guessArray = [];
	// in game array,[0] is the random gen, [1] is the guess1
	// further guesses follow this format.

// JQUERY EVENT HANDLERS ------------------------------

$(document).ready(function(){
	
	// EH1 - Display random number within testNumber (HTML ID)
	//	$('.btn-primary').on('load', randomNumGen);

	// EH2 - Retrieve value of input once guess is pressed.
		$('.btn-primary').on('click', readTheHand);

	// EH3 - Checks guess & randomNumber for a match.
		$('.btn-primary').on('click', guessAttempt);

});

// JAVASCRIPT & JQUERY FUNCTIONS -----------------------

	// logFunction: 	For Debugging Purposes, creating basic logging
	//					In the testingArea.

	function logFunction(result){
		$('#testingArea').append(result);
	};

	// randomNumGen: 	Generates Random Number, plugs number into array
	//					where it will be referenced.

	function randomNumGen(){
		randomArray.push(randomNumber);
		$('#testingArea').text('Random Number equals '+randomNumber+'.');
	};

	// readTheHand: 	Retrieving User Input, and displaying for testing
	//					purposes.

	function readTheHand(){
		var guess = +$('#numberForm').val();
		guessArray.push(guess)
		logFunction('<br>Guess equals '+guess+'.<br>');
	};

	// attempt1: 		if guess & randomNumber are equal, then the user
	//					wins. Otherwise, the user loses.

	function attempt1(){
		$('#testingArea').append('Random Array: '+randomArray+'<br>');
		$('#testingArea').append('Random Number: '+randomArray[0]+'<br>');
		$('#testingArea').append('Guess Array '+guessArray+'<br>');
		$('#testingArea').append('Guess1: '+guessArray[0]+'<br>');
		$('#testingArea').append('Guess Array Length: '+guessArray.length+'<br>');
		
		if(randomArray[0] === guessArray[0]){
			$('#result').text('Guess is Correct!')
		}else{
			$('#result').text('Guess is Incorrect. Keep trying, or maybe a hint can help!')
			}
	};

	// guessAttempt: 	First I want to check if the guessArray is less than
	//					a length of 6 (MGMT of 5-Guess Maximum). Then I want
	//					to test to see if randomArray[0] is equal to any number
	//					in guessArray using indexOf.
	//					 
	
	function guessAttempt(){
		if(guessArray.length<6){
			if(guessArray.indexOf(+randomArray[0])!== -1){
				$('#result').text('You guessed correctly. Nice Work!')
			}else{
				$('#result').text('Incorrect. Press Hint if you would like one.')
			}
		}else{
			$('#result').text('Game Over. The number was '+randomArray[0]+'.')
		}
	};