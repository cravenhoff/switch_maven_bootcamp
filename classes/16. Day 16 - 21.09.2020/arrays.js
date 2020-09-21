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
  
  => Checking Arrays for Specific Elements Using the includes() Method
  Arrays can be checked to see if they contain certain elements or values. This can be done using the includes() array method.
  The value or element to be checked is passed, in the appropriate format (string, number, boolean), to the includes() method.
  The method returns a boolean value of true or false based on whether the value exists or not.

*/

// Find the length of the pets[] array.
let pets = ["charles", "max", "tiger", "fluffy"];
pets.length; // Returns the integer 4.


// Sort the above pets[] array.
pets.sort(); // Returns an alphabetically sorted pets[] array => "charles", "fluffy", "max", "tiger".

// Sort the pets[] array in reverse order.
pets.reverse(); // Returns the elements of the pets[] array in reversed order.

// Check the pets[] array to see if it contains the value "striker".
pets.includes("striker"); // Returns FALSE as pets[] array contains no such value.
pets.includes("max"); // Returns TRUE as pets[] array contains a value of "max".

/*

  => Finding the Index of Array Elements Using the indexof() Method
  Index or keys of array elements can be retrieved using the indexOf() array method.
  The indexOf() method accepts one argument, the element or array value to retrieve the index of.
  The indexOf() method works particularly by retrieving the very first index for which the value and element matched.
  
  => Find the Index of Array Elements Using the lastIndexOf() Method
  Similar to the indexOf() array method, the lastIndexOf() method can also be used to retrieve the index of array elements.
  However, the lastIndexOf() method works the opposite way to the indexOf() method, where it returns the last index where the element matched, and not the first.
  
  => Retrieving Elements Using the slice() Method
  Array elements can be retrieved using the slice() array method.
  The slice() method accepts two arguments, the starting index, and the end index.
  The slice() method retrieves and returns the elements from the indicated starting index and stops at the ending index, but does not include it.
  The returned values or elements can be stored in a new variable. Note that the slice() method returns the selected elements as an array, and not individual string or integer values.
  *IMPORTANT: The slice() array method DOES NOT REMOVE the elements it returns, it just "slices" or selects them.
  
  => Retrieving and Adding/Removing Elements Using the splice() Method
  Unlike the slice() array method, the splice() method can not only select and retrieve array elements at specifed index points, but can also add or remove selected elements within specific indexes.
  The splice() array method accepts three arguments: starting index, how many, and elements to add all separated by comma.
  For items removed from an array using the splice() method, the method returns the removed values. These can be stored in a separate variable.

*/

// Find the index of the pet "tiger" in the pets[] array.
pets.indexOf("tiger"); // Returns the index 2.

// Find the index of the last "tiger" element in the pets[] array.
pets.push("tiger"); // Pets[] === "charles", "max", "tiger", "fluffy", "tiger".
pets.indexOf("tiger"); // Returns the index of 2.
pets.lastIndexOf("tiger"); // Returns the index of 4.

// Return elements between the second and fourth indexes from the pets[] array.
let slicedElements = pets.slice(1, 3);

// Use the splice() array method to remove the fourth and fifth elements.
let splicedElements = pets.splice(3, 2); // Stores the removed items: "fluffy" and "tiger", and stores them in the new variable "splicedElements" as an array.

// Add new pet names to the pets[] array using the splice() method.
pets.splice(1, 0, "striker", "marley"); // Adds "striker" to index 1 and "marley" to index 2. No elements are removed and returned.
let removedElement = pets.splice(0, 1, "spikey"); // Removes the first element, stores it to the new variable "removedElement" and adds "spikey" to index 0.

/*

  => Converting Arrays to Strings Using the toString() Method
  Array elements can easily be converted to string values using the toString() array method.
  This method returns the array elements in a string format, with each element seperated by a comma (no spacing added).
  
  => Converting Arrays to Strings Using the join() Method
  Similar to the toString() array method, join() can also be used to convert array elements into strings.
  The advantage of using the join() array method is its ability to properly style and present the array elements in a readable string format, with appropriate spacing, custom separation symbols other than the default comma. It offers a lot more flexibility that the toString() method.
  
 => Combining Arrays Using the concat() Method
 Arrays and their elements can be combined into one single array using the concat() array method.
 This concatenation operation returns an array. The returned array can be stored in a separate variable.

*/

// Create a new array and convert its elements into a string using the toString() method.
let nrlTeams = ["newcastle nights", "canteburry bulldogs", "west tigers", "south-sydney rabbitohs", "brisbane broncos"];
let nrlTeamsString = nrlTeams.toString();

// Convert the nrlTeams[] array to strings using the join() method.
let nrlTeamsJoin = nrlTeams.join(" - "); // Prints out the nrlTeams[] array in string format and includes proper spacing and a dash separating each element.

// Create a new array and concatenate it with the nrlTeam[] array using the concat() method.
let moreNrlTeams = ["paramatta eels", "north-queensland cowboys", "penrith panthers", "canberra raiders"];
let combinedNrlTeams = nrlTeams.concat(moreNrlTeams); // combinedNrlTeams[] array now contains a total of 9 elements combining 5 from nrlTeams[] and 4 from nrlTeamString[].
