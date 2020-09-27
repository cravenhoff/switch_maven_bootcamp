/* WORKING WITH RECURSIONS IN JAVASCRIPT */

/*

  => JavaScript Functions
  JavaScript deals with different types of functions, but more often in your programming career, you are likely to come across the two common ones listed below:
  1. Functions
  2. Recursions
  
  => Functions
  Functions in JavaScript are essentially "sub-programs" that group relatable code together and provide a clean, repeatable method for executing a single feature or operation in an application. In short, a JavaScript function is a block of code designed to perform a particular task.
  Functions are created using the "function" keyword, accept inputs through the use of parameters, and have a return value, either explicity stated or not (in this case, the function returns a value of "undefined" by default.
  Functions are called by using their name, followed by parenthesis. This is called "invoking" a function, which instructs the JavaScript engine to "process" or "execute" the code within the functions curly braces.
  
  => Types of Functions in JavaScript:
 JavaScript provides the following types of functions:
 1. Named Functions
 2. Anonymous Functions
 3. Function Expressions
 4. Arrow Functions
 5. Nested Functions
 
 => The Arguments Object
 Arguments (values passed into functions) can be treated, by default, as objects, and are referred to as "argument objects".
 Argument objects have an array-like structure, where each argument is stored in an array called "arguments", and retrieved using indexes.
 *NOTE: Whether parameters are explicity specified are not, if an argument is passed into a function on invokation, JavaScript still registers in in the "arguments array". This means that the arguments can still be retrieved by specifying their index value.
 An arguments object can be iterated using a for loop since the object has an array-like structure.
 
 You can specify an argument element to retrieve using its specific index, or you can retrieve the entire arguments array, by calling the array name - this will provide the list of elements within the array.
  
  => Recursions

*/

// Create a simple function that uses argument objects
let greet = function(name) {
  console.log("Hello, " + arguments[0]);
}

greet("Sam"); // greet() function outputs "Hello, Sam".

// Use a similar function to the one above, but without the parameter
let hello = function() {
  console.log("Hello, " + arguments[0]);
}

hello("Max"); // hello() function outputs "Hello, Max", even without the parameter being explicity specified and provided.

// Create a function, pass in three different arguments, and retrieve the list of arguments stored in the default "arguments array"
let funcArgs = function () {
  console.log(arguments);
}

funcArgs("Max", "Coltrain", 54, "Investigative Journalist"); // Returns "Arguments" Array with four elements.

// Iterate through an arguments object using a for loop
function plusOne() {
  let counter = 0;

  for (let i = 0; i < arguments.length; i++) {
    counter += arguments[i];
  }
  return counter;
} 

plusOne(1, 2, 3, 4, 5);

// Return the length of the arguments object (array)
function argsLength() {
  return arguments.length;
}

argsLength(1, 2, 3); // Returns 3, as arguments contains three elements [1, 2, 3].
