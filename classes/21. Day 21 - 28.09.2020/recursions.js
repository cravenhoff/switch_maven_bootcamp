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
  
  => TECHNICAL IMPLEMENTATION: RECURSIONS VS. LOOPS
  A key technical implementation of recursions over loops is the way these two constructs are handled by the JavaScript Engine. Recursions are essentially functions, but they are a special type of function. Unlike traditional functions, recursions or "recursive functions" call themselves in a sort of loop structure for a specified period of runs or iterations until a specific condition, called the "base case" is met and returns a value of true. It is this that tends to cause confusion with beginner programmers on why recursions should be used over loops, when they essentially help to achieve the same thing.
  
  When a recursive function is executed by the JS Engine, the engine creates what are called "stack frames" or a "call stack", whereby each function call or execution is stored in a single stack. This allows the engine to keep track of the following:
  
  1. What functions are being called in the program,
  2. From where the function is being called at (what line of code),
  3. What are the returned values of the function,
  4. What are the newly created variables or updated variables, if any, and
  5. What other internal functions are in the function itself.
  
  There are four (4) key things to keep in mind when dealing with recursions:
  a) Where the recursive function "pauses" when it is executed internally, after the first function call
  b) The "casade" that is created every time the function runs - to the last function call and back to the first function call
  c) Stack frames created per function call and cascade.
  d) The cascade of "return values" that are "passed back" into the previous stack frames - eventually ending at the first function call.

*/

// Create a for loop that decrements each time it loops and counts down from 5
for (let i = 5; i > 0; i--) {
  console.log(i);
} // Prints out the numbers 5, 4, 3, 2, 1 and stops when the condition is no longer true.

// Replace the above loop with a recursion instead
let countdown = (counter) => {
  // Declare base case
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
  // Define base case
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
  // Define base case
  if (lines === 0) {
    return lines;
  } else {
    hash += "#";
    console.log(hash);
    return patterns(lines - 1);
  }
}

console.log(patterns(5)); // Outputs the string of hash patterns in a pyramid scheme, similar to what the for loop did.

// Print out an array with increasing numbers, starting from 1 and ending at the number (n) passed into the function
function arrayInc(num) {
  // Define base case
  if(num === 0) {
    return [];
  } else {
    let newArray = arrayInc(num - 1);
    newArray.push(num);
    return newArray;
  }
} 

console.log(arrayInc(3)); // Runs the recursive function arrayInc() 4 times and returns the newArray === [1, 2, 3]
