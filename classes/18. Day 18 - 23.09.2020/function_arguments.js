/* PASSING FUNCTIONS AS ARGUMENTS TO FUNCTIONS */

// We can pass functions as arguments of other functions. JavaScript will treat the function as any other argument.
// Create a sample function that consoles out a string.
function hello() {
  console.log("hello there");
}

// Save the hello() function in a new variable.
let x = hello();
x; // Calls the x variable, which executes or "invokes" the hello() function.

// Create a new function that executes the hello() function by passing it as an argument.
function wrapper(funcHello) {
  funcHello(); // Invokes the function passed as an argument.
}

// Invoke the wrapper() and hello() functions.
wrapper(hello);
