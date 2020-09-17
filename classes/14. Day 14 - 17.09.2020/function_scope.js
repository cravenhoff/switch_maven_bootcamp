/* FUNCTION SCOPE EXERCISES */

// Exercise #01:

let hero = "mike"; // Definition of global variable "hero".

// Definition of outer() function.
let outer = function() {
  let verb = "eats"; // Definition of local variable "verb".
  
  // Definition of inner() function
  let inner = function(food) {
     console.log(`${hero} ${verb} ${food}`);
  }
  
  // inner() function is invoked
  inner("pizza");
  inner("a lot");
}

// outer() function is invoked.
outer();
