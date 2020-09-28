/* WORKING WITH THE "THIS" VARIABLE KEYWORD IN JAVASCRIPT */

/*

  => this Keyword / Variable
  Used to reference objects in a way that does not hard-code the objects the "this" keyword should reference and look up. Furthermore, it allows for one function to be created and used as many times as required by different objects throughout the life of the program.
  
  When the "this" keyword is used within a function, the object does not need to be passed into the function for it to be accessible to the "this" variable. JavaScript automatically takes care of that. However, this can only be done when the function referencing the object using "this" is linked as a property of the (soon to be referenced) object.
  
  => "this" in Object Functions
  Functions declared as values of properties can reference their parent object using the "this" keyword. In such instances, the parent object is the "owner" of the function property, and therefore whenever the function uses the "this" keyword, it is referencing its parent object.
  
  Example: Refer to the person{} object below.

*/

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

// Another example of functions without the "this" keyword
// Object One
let objOne = {
  count: 0
}

// Object Two
let objTwo = {
  count: 0
}

function countObjs(that) {
  return that.count += 1;
}

countObjs(objOne); // ObjOne.count === 1
objOne.count; // Returns 1
objTwo.count; // Returns 0.

// person object
var person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

person.fullName(); // Returns "John Doe"
