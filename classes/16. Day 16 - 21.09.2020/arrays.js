/* ARRAYS */

/*

  => Creating Arrays
  Arrays are created like any other ordinary variable. The only difference is that arrays are distinguished using the square bracket symbol: []. Within the square bracket, array elements are added, each of which is separated by a comma.
  
  => Accessing Arrays
  Array elements are accessed using index values. Arrays are structured using a key-value pair or relationship, where each element (or value) is assigned to a specific index (key).
  Array elements start with an index of 0, and not 1. Hence, the first element of an array will have an index of 0, the second will have an index of 1, and so on and so forth.
  Elements are accessed using bracket notation, where the index position of the element to retrieve, is enclosed within the bracket.
  
*/

// Create a fruits array
let fruits = ["apple", "orange", "pair", "banana"];

// Access the first element of the fruits array
fruits[0]; // Retrieves the first element and returns its value => apple.

// Saving an element to a variable
let orange = fruits[1];

/*

  WORKING WITH ARRAY METHODS AND PROPERTIES:
  
  => Adding New Elements to an Array using the push() Method / Function
  The push() method is used to add a new element to the end of an existing array.
  The element to add to the array is enclosed within the push method's parenthesis.
  
  => Removing the Last Element of an Array using the pop() Method / Function
  To remove the last element of an array, deploy the pop() method.
  The method does not accept any value. Simply append it to end of the array name, right after the dot / connector.
  
  => Removing the First Element of an Array using the shift() Method / Function
  The shift() method is similar to the pop() method in that it removes an element from an array. However, instead of removing the last element of an array, the shift() method removes the first element of an array.
  
  => Adding New Elements to an Array using the unshift() Method / Function
  The unshift() method is similar to the push() method in that it adds a new element to an existing array. However, unlike the push() methof, unshift() adds the new element to the beginning of the array.

*/

// Add a new fruit to the fruits[] array
fruits.push("watermelon"); // Adds "watermelon" to the end of the fruits[] array.

// The above can also be achieved by simply using index values
fruits[5] = "mango"; // "mango" is now added to the fruits[] array, bringing the total number of fruits (elements) to 6.

// Remove the last element of the fruits[] array
fruits.pop();

// Store the removed element in a new variable
let removedFruit = fruits.pop();

// Remove the first element of the fruits[] array
fruits.shift();

// Store the removed fruit in a new variable
let removedElement = fruits.shift();

// Add a new fruit to the beginning of the fruits[] array
fruits.unshift("peanuts");

/*

  => Finding the length of an array using the .length property
  The length of an array can be determined using the "length" property of the array construct.
  The length property returns an integer value. The value can be stored in another variable if required.
  
  => Sorting Array Elements Using the sort() Method
  Arrays or elements of an array can be sorted alphabetically using the array sort() method.
  
  => Sorting Array Elements in Reverse Order Using the reverse() Method
  Apart from sorting array elements in alphabetical order using the sort() array method, arrays can also be sorted in reverse order using the reverse() array method.

*/

// Find the length of the pets[] array.
let pets = ["charles", "max", "tiger", "fluffy"];
pets.length; // Returns the integer 4.


// Sort the above pets[] array.
pets.sort(); // Returns an alphabetically sorted pets[] array => "charles", "fluffy", "max", "tiger".

// Sort the pets[] array in reverse order.
pets.reverse(); // Returns the elements of the pets[] array in reversed order.
