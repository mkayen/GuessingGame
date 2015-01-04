// GLOBAL VARIABLES

var randomNumber = Math.floor((Math.random() * 100) + 1);
var gameArray = []
	// in game array,[0] is the random gen, [1] is the guess1
	// further guesses follow this format.

// JQUERY EVENT HANDLERS ------------------------------

$(document).ready(function(){
	
	// EH1 - Display random number within testNumber (HTML ID)
	//	$('.btn-primary').on('load', randomNumGen);

	// EH2 - Retrieve value of input once guess is pressed.
		$('.btn-primary').on('click', readTheHand);

	// EH3 - Checks guess & randomNumber for a match.
		$('.btn-primary').on('click', attempt1);

});

// JAVASCRIPT & JQUERY FUNCTIONS -----------------------

	// logFunction: 	For Debugging Purposes, creating basic logging
	//					In the testingArea.

	function logFunction(result){
		$('#testingArea').append(result);
	}

	// randomNumGen: 	Generates Random Number, plugs number into array
	//					where it will be referenced.

	function randomNumGen(){
		gameArray.push(randomNumber);
		$('#testingArea').text('Random Number equals '+randomNumber+'.');
	}

	// readTheHand: 	Retrieving User Input, and displaying for testing
	//					purposes.

	function readTheHand(){
		var guess = +$('#numberForm').val();
		gameArray.push(guess)
		logFunction('<br>Guess equals '+guess+'.<br>');
	}

	// attempt1: 		if guess & randomNumber are equal, then the user
	//					wins. Otherwise, the user loses.

	function attempt1(){
		$('#testingArea').append('Array: '+gameArray+'<br>');
		$('#testingArea').append('Random Number: '+gameArray[0]+'<br>');
		$('#testingArea').append('Guess1: '+gameArray[1]+'<br>');
		if(gameArray[0] === gameArray[1]){
			$('#result').text('Guess is Correct!')
		}else{
			$('#result').text('Guess is Incorrect. Keep trying, or maybe a hint can help!')
			if(gameArray[0] === gameArray[2]){
				$('#result').text('Guess is Correct!')
			}else{
				$('#result').text('Guess is Incorrect. Keep trying, or maybe a hint can help!')
			}
		}

	// attempt2: 		Try Again
	
	function attempt2(){

	}


	}
