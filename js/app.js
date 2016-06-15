
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


var hotOrCold = function(){
// guess count
	var guessCount = 0;
// number generator
	var randomNumb = Math.floor((Math.random() * 100) + 1);
		// verify that 1 & 100 are included in this range
// user guess
	var userGuess = parseInt($('#userGuess').val());
	if ((userGuess >= 1) && (userGuess <= 100) && (userGuess !== NaN)) {
		guessCount += 1;
			// apply to span#count
		if (userGuess === randomNumb) {
			console.log("You got it!")
		   }
		    else if (userGuess < (randomNumb + 5) && userGuess > (randomNumb - 5)) {
		    console.log("You're hot!");
		   }
		    else if (userGuess < (randomNumb + 15) && userGuess > (randomNumb - 15)) {
		      console.log("You're warm");
		   }
		    else if (userGuess < (randomNumb + 25) && userGuess > (randomNumb - 25)) {
		      console.log("You're cold!");
		   } 
		    else {
		      console.log("Not even close");
		   }

// compares to guess
	else alert("Invalid input, please choose an integer between 1 & 100.")
	}

// function giving feedback on proxity of guess; not relative to prev guess, but to correct answer (div#feedback)

// list of prev guesses (each guess set to <li> in ul#guessList)

// ensure HTML5

}

// var newGame = function() {
// 	// reset # of guesses, feedback section, list of guesses
// 	// be able to start consecutive games without reloading or refreshing
// }

});

// splitting the code into functions (anywhere that code repeats and to group things that do one thing)
