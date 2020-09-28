/* WORKING WITH THE "THIS" VARIABLE KEYWORD IN JAVASCRIPT */

/*

  => this Keyword / Variable
  Used to reference objects in a way that does not hard-code the objects the "this" keyword should reference and look up. Furthermore, it allows for one function to be created and used as many times as required by different objects throughout the life of the program.
  
  When the "this" keyword is used within a function, the object does not need to be passed into the function for it to be accessible to the "this" variable. JavaScript automatically takes care of that. However, this can only be done when the function referencing the object using "this" is linked as a property of the (soon to be referenced) object.
  
  => "this" in Object Functions
  Functions declared as values of properties can reference their parent object using the "this" keyword. In such instances, the parent object is the "owner" of the function property, and therefore whenever the function uses the "this" keyword, it is referencing its parent object.
  
  Example: Refer to the person{} object below.
  
  => call() Object Method
  The call() method is a prefedined JavaScript method / function. This method is used to fire up object functions and can pass new, and separate objects into the calling object function.
  
  The call() method is appended to the object function (generally using dot notation), and within its parenthesis, passes in the object to reference. This results in the object function using the "this" keyword to reference the object passed into the function using the call() method, and not the owner of the function calling it.
  
  Example: Refer to an updated person{} object for.

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
let person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName; // "this" refers to the "owner of the function", which is the object person{}.
    // In other words, if we did not use "this", we would instead have hard-coded the object, replacing "this" with "person".
  }
}

person.fullName(); // Returns "John Doe"

// Updated person object
let newPerson = {
  fullName: function () {
    return this.firstName + " " + this.lastName; // At this stage, "this" references the functions owner newPerson{} object.
  }
}

let personOne = {
  firstName:"John",
  lastName: "Doe"
}

let personTwo = {
  firstName:"Marry",
  lastName: "Anne"
}

// We can now retrieve the first and last name of either personOne or personTwo objects by simply using the call() method.
person.fullName.call(personOne); // Returns "John Doe"
// After personOne{} is passed into the fullName() function, "this" no longer references its parent owner "newPerson{}"; it instead references the new parent owner "personOne{}".
person.fullName.call(personTwo); // Returns "Mary Anne"
// Likewise, after personTwo{} is passed into the fullName() function, "this" no longer references its parent owner "newPerson{}"; it now references the new parent owner "personTwo{}".
