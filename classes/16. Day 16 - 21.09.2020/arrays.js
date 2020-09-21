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
  
  => Adding New Elements to an Array using the push() method / function
  The push() method is used to add a new element to the end of an existing array.
  The element to add to the array is enclosed within the push method's parenthesis.

*/

// Add a new fruit to the fruits[] array
fruits.push("watermelon"); // Adds "watermelon" to the end of the fruits[] array.

// The above can also be achieved by simply using index values
fruits[5] = "mango"; // "mango" is now added to the fruits[] array, bringing the total number of fruits (elements) to 6.
