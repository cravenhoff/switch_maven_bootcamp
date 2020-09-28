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

// Without the "this" keyword, the above function will be as follows
let newObj = {
  count: 0,
  increase: inc
}

function inc(objData) {
  return objData.count += 1;
}

inc(newObj); // Passes in the newObj{} object

