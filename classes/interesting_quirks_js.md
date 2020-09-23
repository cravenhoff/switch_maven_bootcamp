# AN OUTLINE & SUMMARY OF INTERESTING QUIRKS ABOUT JAVASCRIPT DISCOVERED DURING TRAINING

### Objects: Accessing Number Type Properties
* Properties that have a number data type can only be accessed in JavaScript using bracket notation. Using dot notation will result in an error.

### Functions:
#### Functions as Function Parameters
* Functions can also be passed in to other functions as arguments. JavaScript will treat the function argument as any other standard argument.
* There are two ways function parameters are handled based on how they are called. Functions passed in as arguments to another function are either:
  1. **Invoked, or**
  2. **Referenced**
  
* Invoked functions are called and executed only when the parenthesis sign in included. If the function is called without the parenthesis, it does not execute, meaning JavaScript will not run the block of code within the curly braces.
* Referenced functions occur when the a function is called without the parenthesis. When JavaScript encounters this, it will reference, basically copy the contents of the function and pass it into the variable calling it.

#### Passing Values Vs. Passing References into Functions
* Functions can receive parameters as either values or references. This depends on two key things:
  1. **Atomic or Composite Values, and**
  2. **Method of Function Calling**

* Atomic Values are singular, light-weight, and simple data structures/types. These include strings, numbers and booleans.
  * Atomic values when passed into a separate variable, make a copy of the value of the variable and assign it to the new variable.
  * When atomic values are copied across separate variables, each of the variables containing the copied value have a unique address on the computer, meaning they do not refer to or reference the address of the originally initialized variable. 
  * What does this mean then? Basically, it means that the variables are **"not linked"**, so what we do to one will not affect any other variable holding the **"copied"** value; it is independent of the others.
* Composite Values on the other hand are a collection of data structures and include data types like arrays, objects and functions.
  * Contrast atomic values with composite values, the variables are **"referenced"** and **"linked"**, thereby having a default dependent state, in that what we do with one variable will have an effect on every other variable containing the reference.
  * This means that composite values are not stored and do not reference different addresses; they all refer to the same address on the computer.
  
* Method of Function Calling
  * Depending on how a function is called, JavaScript can process it in two different ways.
  * The first and common method of processing or running a function is done by simply calling the function name followed by parenthesis (). This tells JavaScript to **"execute"** or as it is technically known, **"invoke"** the function. A function is invoked when the block of code within its curly braces {} is processed / rendered.
  * The second function is done in a similar fashion to the first method, but this time the parenthesis is disregarded. This tells JavaScript to **"copy"** the contents of the function, that is: the block of code within the functions curly braces, and returns it to the calling script. In the instance where the function call is assigned to a new variable, the contents of the function is simply returned to and stored within the new variable.
