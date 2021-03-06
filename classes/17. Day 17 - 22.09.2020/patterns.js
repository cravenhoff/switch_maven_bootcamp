/* CREATING PATTERNS (STRING CHARACTERS) USING LOOPS */

/* First Pattern: Create a pattern using hashes or aesterisks that stars at one and increases by a value of one. */
// Solution / Implementation #1:
let hash = "";
let counter = 0;

for (let counter = 1; counter <= 5; counter++) {
  console.log(hash + "#");
  hash += "#";
}

// Solution / Implementation #2: Using a While Loop
while (counter < 5) {
	console.log(hash + "#");
  hash += "#";
	counter++;
}

// Solution / Implementation #3: Using a While and For Loop
while (counter < 2) {
	for (i = 0; i < 3; i++) {
		console.log(hash + "#");
        hash += "#";
	}
  
	counter++;
}


/* Second Pattern: Same as above, but the pattern this time should be inverted. */
// Solution / Implementation #1:
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
