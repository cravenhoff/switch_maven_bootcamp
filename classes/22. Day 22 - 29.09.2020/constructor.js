/* OBJECT INSTANTIATION AND JAVASCRIPT FUNCTION CONSTRUCTORS */

/*

  OUTLINE:
  => Constructor Function
  A function that acts as a constructor in JavaScript for creating or "instantiating" new objects dynamically, without the need to independently create objects or using a loop to assign the same properties to different objects.
  
  A constructor function utilizes the "this" keyword to reference new instantiated objects, and assigns properties to it using dot notation. Generally, the constructor will accept the property values as arguments.
 
  => Using the Call() Object Method
  Objects can still be replicated to "instantiate" from a function, however the function would not perform like an actual "constructor". This technique can be achieved using the call() object method.
  
  The call() object method accepts as arguments, an object along with several other values for any accepted function parameters. It is important to note that the first argument passed into the call() method should be the object to reference in the function. Any subsequent argument will be treated by the call() method as values for the functions parameters, if it accepts any at all.
  
  Syntax:
  The call() method is appended to the function that needs to reference a particular object.
  Eg: functionNation.call(object, argument1, argument2, ....);
  
  3. Referencing the Global Window Object

*/

// Create a "clone" constructor function that instantiates new object clones of yourself.
let crystalClone = function (name, age, superPower) {
  this.name = name;
  this.age = age;
  this.superPower = superPower;
}

// Instantiate a clone of Crystal
let crystalClone1 = new crystalClone("Crystal", 22, "Time Travel");
let crystalClone2 = new crystalClone("Craven", 12, "Teleportation");
let crystalClone3 = new crystalClone("Lenora", 33, "Photographic Memory");

// Create a function and instantiate an object using the call() method technique.
