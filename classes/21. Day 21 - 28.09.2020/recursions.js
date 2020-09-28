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
  
  => Recursions vs. Loops
  Why would you want to use recursions over loops?
  
  1. Loops
  Loops run faster than recursive functions, and when it comes to readability, it's much easier to look at a loop and understand what's happening. Furthermore, loops are easier to write/code than recursive functions, and often times require less code and lines.
  
  2. Recursions
  Recursions on the other hand are very elegant. Recursions emphasize and allow efficiency. However, a good rule of thumb when it comes to designing and build programs is to focus on writing code that is "correct" and "easy to understand". Efficiency, speed and app performance can be measured afterwards and improved if necessary.
  
  *NOTE: The important advantage recursion provides over loops, is that it can only be used to solve certain problems in a program that loops cannot otherwise do. More on this will be provided below in subsequent examples.

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

// Another Recursion Example: Counting Up to 100 in Fives
let countToHundredInFives = num => {
  // Define base camp
  if (num > 100) {
    return "Congratulations! You have reached 100.";
  } else {
    console.log(num);
    return countToHundredInFives(num + 5);
  }
}

console.log(countToHundredInFives(0));

// More recursion examples: String character patterns with for loops and recursions
// Printing out a hash pyramid using a for loop
let hash = "#";
for (let i = 0; i < 5; i++) {
  console.log(hash);
  hash += "#";
}

// Printing out a hash pyramid using a recursion
let hash = "";
let patterns = lines => {
  // Define base camp
  if (lines === 0) {
    return lines;
  } else {
    hash += "#";
    console.log(hash);
    return patterns(lines - 1);
  }
}

console.log(patterns(5)); // Outputs the string of hash patterns in a pyramid scheme, similar to what the for loop did.
