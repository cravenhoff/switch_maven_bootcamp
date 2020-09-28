/* WORKING WITH RECURSIONS IN JAVASCRIPT */

/*

  => What Are Recursions?
  Recursions are functions that repeat themselves, similar to a loop, until a speciifed condition has been met. This "specifed condition" must be provided to the recursive function, and is technically called the "base camp". This is declared as the first statement in any recursive function.
  
  An example of a recursion is provided below where a standard loop that counts down from a certain value is replaced with a recursion that performs the same operation.
  
  => Key Concepts in Recursions
  Recursions deal with a lot of similar foundational concepts and components of JavaScript.
  
  Breaking the example recursion provided below, the following key parts are noted:
  1. Arrow function and function expression
  The recursion example below is created using a function expression and arrow function syntax.
  
  2. If statement - base camp
  The base camp is provided using an IF Statement. that instructs the recursion when to stop running itself. This is done when the condition in the IF Statemtent is met and returns true. As long as the if statement is false, the consecutive lines of code within the function runs.
  
  3. Function is called within itself
  The countdown() recursion example ends by calling itself and ensures to include the following:
    a. A decrement (or increment), or what is referred to as the "final expression" in a for loop. This is the counter that keeps count of the recursion variable.
    b. Return keyword where by the current value of the counter is returned to the console and printed out.
  
  4. Function call: Starting point - intial counter value
  Finally, the recursion is called "outside" the function and passes in the initial or starting value of the counter as the function argument.

*/

// Create a for loop that decrements each time it loops and counts down from 5
for (let i = 5; i > 0; i--) {
  console.log(i);
} // Prints out the numbers 5, 4, 3, 2, 1 and stops when the condition is no longer true.

// Replace the above loop with a recursion instead
let countdown = (counter) => {
  // Declare base camp
  if (counter === 0) {
    return "End of recursion...";
  } else {
    console.log(counter);
    return countdown(counter - 1);
  }
}

console.log(countdown(5));

// Another recursion example: Even or Odd Number
let evenOrOdd = number => {
  if (number === 0) {
    return "Even";
  } else if (number === 1) {
    return "Odd";          
  } else {
    return evenOrOdd(number - 2);
  }
}

console.log(evenOrOdd(5)); // Returns "Odd"
console.log(evenOrOdd(12)); // Returns "Event"
