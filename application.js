// GLOBAL VARIABLES

var randomNumber = Math.floor((Math.random() * 100) + 1);


// JQUERY EVENT HANDLERS ------------------------------

$(document).ready(function(){
	
	// EH1 - Display random number within testNumber (HTML ID)
		$('.btn-primary').on('click', randomNumGen);

	// EH2 - Retrieve value of input once guess is pressed.
		$('.btn-primary').on('click', readTheHand);

});

// JAVASCRIPT & JQUERY FUNCTIONS -----------------------

	// randomNumGen: 	Generates Random Number, plugs number into array
	//					where it will be referenced.

	function randomNumGen(){
		$('#testingArea').text(randomNumber)
	}

	// readTheHand: 	Retrieving User Input, and displaying for testing
	//					purposes.

	function readTheHand(){
		var guess = +$('#numberForm').val();
		$('#testingArea').append('<br>Guess equals '+guess+'.<br>');
	}

	// guessNumber: 	User types number into textbox. Initially checks
	//					if number is correct or not.
