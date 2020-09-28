/* WORKING WITH THE "THIS" VARIABLE KEYWORD IN JAVASCRIPT */

// Example code of the "this" keyword
function increase() {
  return this.count += 1;
}

// Create the object the "this" keyword will reference
let obj = {
  count: 0,
  inc: increase
}

// Call the property function inc()
obj.inc(); // Returns the increment of 1.
