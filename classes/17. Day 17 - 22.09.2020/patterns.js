/* CREATING PATTERNS (STRING CHARACTERS) USING LOOPS */

// First Pattern: Create a pattern using hashes or aesterisks that stars at one and increases by a value of one.
let hash = "";

for (let counter = 1; counter <= 5; counter++) {
  console.log(hash + "#");
  hash += "#";
}


// Second Pattern: Same as above, but the pattern this time should be inverted.
// Solution / Implement #1:
let char = "#";
let charNum = 5;

for (let outerCounter = 1; outerCounter <= 1; outerCounter++) {
  char = char.repeat(charNum);
  
  for (let innerCounter = 1; innerCounter <=5; innerCounter++) {
    console.log(char);
    char = char.slice(0, char.length-1);
    charNum--;
  }
}


// Third Pattern: Create a similar pattern as the "first pattern", but have it right-aligned.
// Fourth Pattern: Same as pattern three, but this time the pattern should be inverted.
// Fifth Pattern: Create a pattern that prints out a symmetrical pyramid.
// Sixth Pattern: Create a pattern that prints out a christmas tree. The tree should have a trunk as well.
