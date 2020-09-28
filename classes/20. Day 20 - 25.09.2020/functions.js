/* WORKING WITH FUNCTIONS IN JAVASCRIPT */

/*

  => JavaScript Functions
  JavaScript deals with different types of functions, but more often in your programming career, you are likely to come across the two common ones listed below:
  1. Functions
  2. Recursions
  
  => Functions
  Functions in JavaScript are essentially "sub-programs" that group relatable code together and provide a clean, repeatable method for executing a single feature or operation in an application. In short, a JavaScript function is a block of code designed to perform a particular task.
  Functions are created using the "function" keyword, accept inputs through the use of parameters, and have a return value, either explicity stated or not (in this case, the function returns a value of "undefined" by default).
  Functions are called by using their name, followed by parenthesis. This is called "invoking" a function, which instructs the JavaScript engine to "process" or "execute" the code within the functions curly braces.
  
  A function can be defined using function keyword and can be executed using () operator.
  
  => Types of Functions in JavaScript:
 JavaScript provides the following types of functions:
 
 1. Named Functions
 Named functions are the most popular functions in JavaScript. Opposite to function expressions and anonymous functions, named functions are functions that are "named", or have a label that can be used to call the function.
 
 There are several examples of named functions provided below. Refer to the plusOne() function for reference.
 
 2. Function Expressions
 Function expressions are simply variables that are used to assign a function to. This creates variables that "function" or operate exactly the same as any standard type of function, and is achieved by simply "invoking" the function by using the variable name along with parenthesis. 
 
 There are several examples provided below of function expressions, whereby functions are created and then assigned to new variables.
 
 3. Anonymous Functions
 Anonymous functions are functions created without a name or label assigned to them. In order to work with anonymous functions, the functions are generally created and assigned to variables in what are called "function expressions". This is achieved by creating a standard variable and assigning its value the function code, without any name. The function code to the right of the assignment operator includes just the "function" keyword, parenthesis, and the curly braces containing the block of code to run when the function is invoked (called using the variable name it's been assigned to and parenthesis).
 
 4. Nested Functions
 In JavaScript, a function can have one or more inner functions. This is acheived through "nesting" functions within other functions.
 All nested functions are within scope of the outer function, however anything within the nested functions are out of scope from the outer function.
 
 For a sample of a nested function, refer to the multiple() function provided below.
 
 5. Arrow Functions
 Arrow functions are a shorthand function expression, and were introduced in ES6.
 
 Functions written in this shorthand form do not use the "function" keyword, and the functions created are done so as "function expressions" (function code is assigned to a variable). Furthermore, function parameters are declared within parenthesis for functions that accept multiple arguments. In the instance that the function only accepts one argument, the parenthesis can be excluded.
 
The final syntax of an arrow function includes an arrow, composed using the assignment operator and the greater than sign. This is provided after the function parameters and precedes the function's curly braces.
 
 => The Arguments Object
 Arguments (values passed into functions) can be treated, by default, as objects, and are referred to as "argument objects".
 Argument objects have an array-like structure, where each argument is stored in an array called "arguments", and retrieved using indexes.
 *NOTE: Whether parameters are explicity specified are not, if an argument is passed into a function on invokation, JavaScript still registers in in the "arguments array". This means that the arguments can still be retrieved by specifying their index value.
 An arguments object can be iterated using a for loop since the object has an array-like structure.
 
 You can specify an argument element to retrieve using its specific index, or you can retrieve the entire arguments array, by calling the array name - this will provide the list of elements within the array.
 
 => Function: Return Value
 All functions return a value, whether the "return" keyword is explicity stated or not (in this case, the function returns a value of "undefined" by default).
 Functions can return variables, evaluations of operations, and even other functions.
 In cases where functions return other functions, this is mostly used when nested functions are in usage.
 The return values of functions can be assigned to variables for storage.

*/

// Create a function expression - this is also an example of an "anonymous function"
let add = function(num1, num2) { // The function expression is assigned to the variable "add".
  return num1 + num2;
}

// Invoke the above function expression (and anonymous function(
add(3, 5); // add() function returns 8, and is called just like any other standard function.

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

// Created a nested function and return the inner (nested) function as the return value of the outer (parent) function
function multiple(x) {
  let innerFunc = function (y) {
    return x * y;
  }
  
  return innerFunc;
} 

let triple = multiple(3); // triple === innerFunc(y) {return 3 * y;} or innerFunc(y) {return x * y;}
triple(5); // triple is invoked, thereby causing inner() to run. triple is now === innerFunc(5) {return 3 * 5;}. Hence, triple === 15.
triple;
