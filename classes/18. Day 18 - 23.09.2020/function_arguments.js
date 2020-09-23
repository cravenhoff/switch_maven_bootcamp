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
wrapper(hello);function hello(){
  console.log('hello')
}

function goodbye(){
  console.log('good bye')
}


let x = hello()
x; // Invokes the hello() function so x = "hello".


function wrapper(f){
   f() // Invokes the hello() and goodbye() functions so wrapper() outputs "hello" and "goodbye".
}

wrapper( hello )

/* 

    NOTES:
    
    When a variable containing the function value is called or "invoked" in technical terms, the function is executed. Variable functions are invoked by including the parenthesis (). Without this, the function is copied into the the calling variable and linked.

*/
