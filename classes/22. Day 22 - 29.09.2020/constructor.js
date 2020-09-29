/* OBJECT INSTANTIATION AND JAVASCRIPT FUNCTION CONSTRUCTORS */

/*

  OUTLINE:
  => Constructor Function
  A function that acts as a constructor in JavaScript for creating or "instantiating" new objects dynamically, without the need to independently create objects or using a loop to assign the same properties to different objects.
  
  A constructor function utilizes the "this" keyword to reference new instantiated objects, and assigns properties to it using dot notation. Generally, the constructor will accept the property values as arguments.
 
  2. Using the Call() Object Method
  3. Referencing the Global Window Object

*/

// Create a "clone" constructor function that instantiates new object clones of yourself
let crystalClone = function (name, age, superPower) {
  this.name = name;
  this.age = age;
  this.superPower = superPower;
}

// Instantiate a clone of Crystal
let crystalClone1 = new crystalClone("Crystal", 22, "Time Travel");
let crystalClone2 = new crystalClone("Craven", 12, "Teleportation");
let crystalClone3 = new crystalClone("Lenora", 33, "Photographic Memory");
