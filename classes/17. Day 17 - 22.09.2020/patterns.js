/* CREATING PATTERNS (STRING CHARACTERS) USING LOOPS */

// First Pattern: Create a pattern using hashes or aesterisks that stars at one and increases by a value of one.
let hash = "";
let innerIdx = 5;
let outerIdx = 5;
let counter = 0;

for (let outerCounter = 1; outerCounter <= 5; outerCounter++) {
  console.log(hash + "#");
  hash += "#";
}


// Second Pattern: Same as above, but the pattern this time should be inverted.
// Third Pattern: Create a similar pattern as the "first pattern", but have it right-aligned.
// Fourth Pattern: Same as pattern three, but this time the pattern should be inverted.
// Fifth Pattern: Create a pattern that prints out a symmetrical pyramid.
// Sixth Pattern: Create a pattern that prints out a christmas tree. The tree should have a trunk as well.
