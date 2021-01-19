// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

let userChoice = "";
let computerChoice = "";
let winner = "";
let computerRandomNumber = 0;


$("#shoot").on("click", function() {
  // Get the user's choice
  let userInput = $("#input").val();
  userChoice = userInput.toLowerCase();
  
  if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    $("#result").html("User input was invalid.  Please choose between: rock, paper, and scissors.");
    return;
  }
  
  // Get the computer's choice
  computerRandomNumber = Math.random();
   
  if (computerRandomNumber <= 0.33) {
    computerChoice = "rock";
  } else if (computerRandomNumber <= 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  
  // Determine the winner
  if (userChoice === "rock") {
    if (computerChoice === "rock") {
      winner = "It's a tie!";
    } else if (computerChoice === "paper") {
      winner = "The computer wins!";
    } else {
      winner = "The user wins!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      winner = "The user wins!";
    } else if (computerChoice === "paper") {
      winner = "It's a tie!";
    } else {
      winner = "The computer wins!";
    }
  } else {
    if (computerChoice === "rock") {
      winner = "The computer wins!";
    } else if (computerChoice === "paper") {
      winner = "The user wins!";
    } else {
      winner = "It's a tie!";
    }
  }
  
  // Print out the results
  $("#userChoice").html(userChoice)
  $("#computerChoice").html(computerChoice);
  
  $("#result").html(winner);
  
  $("#input").val("")
});