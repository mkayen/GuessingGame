// GLOBAL VARIABLES

var randomNumber = Math.floor((Math.random() * 100) + 1);
var randomArray = [];
var guessArray = [];

// JQUERY EVENT HANDLERS ------------------------------

$(document).ready(function(){

	// Retrieve value of input once guess is pressed.
		$('.btn-primary').on('click', readTheHand);

	// Checks guess & randomNumber for a match.
		$('.btn-primary').on('click', guessAttempt);

	// Generates hint when hint button is pressed
		$('.btn-default').on('click', hint);

	// Tells user if guess is hot
		$('.btn-primary').on('click', heat);

});

// JAVASCRIPT & JQUERY FUNCTIONS -----------------------

	// logFunction: 	For Debugging Purposes, creating basic logging
	//					In the testingArea.

	function logFunction(result){
		$('#testingArea').text(result);
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
		logFunction('Guesses so far: '+guessArray);
	};

	function highOrLow(number){
		if(number<randomArray){
			$('#result').text('Incorrect. The number is higher.')
		}else{
			$('#result').text('Incorrect. The number is lower.')
			console.log()
		}
	};
		
	// guessAttempt: 	First I want to check if the guessArray is less than
	//					a length of 6 (MGMT of 5-Guess Maximum). Then I want
	//					to test to see if randomArray[0] is equal to any number
	//					in guessArray using indexOf.

	function guessAttempt(){
		if(guessArray.length<5){
			if(guessArray.indexOf(+randomArray[0])!== -1){
				$('#result').text('You guessed correctly. Nice Work!')
			}else{
				highOrLow(guessArray[guessArray.length-1]);
			}
		}else{
			$('#result').text('Game Over. The number was '+randomArray[0]+'.')
		}
	};

	// hint: 			Help players guess by reducing the range to guess in.

	function hint(){
		if(randomArray[0]%2===0){
			$('#result').text("The random number is even.")
		}else{
			$('#result').text("The random number is odd.")
		}
	}

	// heat: 			Tells user if the guess is "cold", "warm" or "hot"
	//					Hot being very close

	function heat(){
		if(guessArray.indexOf(+randomArray[0])== -1){
			if(Math.abs(randomArray[0]-guessArray[guessArray.length-1])<5){
				$('#result').append(" You're hot!")
			}else if(Math.abs(randomArray[0]-guessArray[guessArray.length-1])<15 && Math.abs(randomArray[0]-guessArray[guessArray.length-1])>5){
				$('#result').append(" You're warm.")
			}else{
				$('#result').append(" You're cold.")
			}
		} else{
			$('#result').append(" Wooo!!!")
		}
	}


