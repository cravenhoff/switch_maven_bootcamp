/* LIST OF RECURSIONS ALGORITHMS AND EXERCISES */
// Following are a list of sample recursion algorithms and exercises I worked on during the course of the Switch Maven Software Development Bootcamp.

/*
  FREECODECAMP EXERCISE:
  1. Write a program that reverses a string using recursion. Given the string "freeCodeCamp" your program should return "pmaCedoCeerf".
*/

let counter = 0;
let reversedChar = [];
let reversedStr = "";
let finalStr = "";

let reverseString = str => {
	let stringLength = str.length;

	// Define base camp
	if (stringLength === 0) {
		return "You've run out of characters!";
	}
    
    
	let strChar = str[stringLength - 1]
	console.log(strChar);

	let newStr = "";
	newStr += str.slice(counter, stringLength - 1);

	reversedChar.push(strChar);

	reversedStr = reversedChar.toString();

	finalStr = reversedStr.replace(/,/g, "");

	console.log(finalStr);
    return reverseString(newStr);
}

console.log(reverseString("freeCodeCamp"));
