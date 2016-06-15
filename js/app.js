
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

$("#guessButton").on('click', function(event) {
	event.preventDefault();
	hotOrCold();
});
// list of prev guesses (each guess set to <li> in ul#guessList)
// ensure HTML5

});

var hotOrCold = function(){
// guess count
	var guessCount = 0;
// number generator
	var randomNumb = Math.floor((Math.random() * 100) + 1);
		// verify that 1 & 100 are included in this range
// user guess
	var userNumb = parseInt($('#userGuess').val());
	console.log("hello world",userNumb, typeof userNumb, (userNumb >= 1) && (userNumb <= 100) && (userNumb !== NaN));
	if ((userNumb >= 1) && (userNumb <= 100) && (userNumb !== NaN)) {
			var newCount = guessCount +=1;
			$("span#count").val(newCount);
			// apply to span#count
		if (userNumb === randomNumb) {
			$("#feedback").text("You got it!");
		   }
		    else if (userNumb < (randomNumb + 5) && userNumb > (randomNumb - 5)) {
		    $("#feedback").text("You're hot!");
		   }
		    else if (userNumb < (randomNumb + 15) && userNumb > (randomNumb - 15)) {
		      $("#feedback").text("You're warm");
		   }
		    else if (userNumb < (randomNumb + 25) && userNumb > (randomNumb - 25)) {
		      $("#feedback").text("You're cold!");
		   }
		    else {
		      $("#feedback").text("Not even close");
		  }
	  }
//Direct output to Div#feedback
// compares to guess
	else {
		alert("Invalid input, please choose an integer between 1 & 100.")
	}
}

// var newGame = function() {
// 	// reset # of guesses, feedback section, list of guesses
// 	// be able to start consecutive games without reloading or refreshing
// }



// splitting the code into functions (anywhere that code repeats and to group things that do one thing)
