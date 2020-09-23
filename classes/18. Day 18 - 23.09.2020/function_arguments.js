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

// Create a sample function that consoles out a string.
function goodbye() {
  console.log("bye for now");
}

// Create a new function that executes the goodbye() function by passing it as an argument.
function container(funcBye) {
  return funcBye; // No parenthesis () so goodbye() function is not invoked. Instead, the function is linked with its exact code/value copied.
}

// Invoke the container() function.
container(goodbye); // container() function runs but does not execute the goodbye() function, instead it returns it's exact code and value.

/* 

    NOTES:
    
    When a variable containing the function value is called or "invoked" in technical terms, the function is executed.
    Variable functions are invoked by including the parenthesis (). Without this, the function is copied into the the calling variable and linked.

*/
