/* WORKING WITH RECURSIONS IN JAVASCRIPT */

/*

  => What Are Recursions?
  Recursions are functions that repeat themselves, similar to a loop, until a speciifed condition has been met. This "specifed condition" must be provided to the recursive function, and is technically called the "base camp". This is declared as the first statement in any recursive function.
  
  An example of a recursion is provided below where a standard loop that counts down from a certain value is replaced with a recursion that performs the same operation.

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
  }
  
  console.log(counter);
  return countdown(counter - 1);
}

console.log(countdown(5));
