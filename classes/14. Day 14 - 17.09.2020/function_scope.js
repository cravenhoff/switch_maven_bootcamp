/* FUNCTION SCOPE EXERCISES */

// Exercise #01:

let hero = "mike";

let outer = function() {
  let verb = "eats";
  
  let inner = function(food) {
     console.log(`${hero} ${verb} ${food}`);
  }
  
  inner("pizza");
  inner("a lot");
}

outer();
