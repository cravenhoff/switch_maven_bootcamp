/* A simple JS Program that tells the user whether to eat at home or go out for lunch. */
/* The program uses prompt() to accept user input. */

// Ask user to input the state of the weather
// console.log("What is the weather like?");
let weather = prompt("What is the weather like? Good or Bad?");

// Conditional statement: check if the weather is good or bad, and output the right recommendation.
if (weather === "Good") {
  console.log("Eat out for lunch!");
}

if (weather === "Bad") {
  console.log("Eat lunch at home!");
}
