//! String in JS.
//* Ways to declare string. We can use "" , '' & `` to assign an string value to any variable.

let str1 = "I am good!";

let str2 = "I am a Web Developer";

let str3 = `How are you?`;
console.log(str1, str2, str3);

// A new way to create string with new keyword.
let latestString = new String("Hello Coder Army!");
console.log(latestString);
console.log(typeof latestString); // It will give object because it will store as an object.

// How can we print any variable number with string like price of tomato is 12.
let price = 20;
console.log(`Price of fresh Tomato is ${price}, get it asap.`); // It will print the price value even if it will change frequently.

// Another method to print above statement.
console.log("Price of fresh Tomato is", price, ", get it asap.");

//* String Concatenation.
let firstName = "Madhur";
let lastName = "Purohit";
let fullName = firstName + lastName;
console.log(fullName);

// Another method to do this is:-
let fullName1 = `${firstName} ${lastName}`;
console.log(fullName1);

// How to print "", to print this there are multiple ways.
console.log('"Hello Coder Army"');
console.log("'Hello Coder Army'");

// How to print in next line. For that we use \n for next line because it is a special character.
console.log("I am a bad boy. \n& i am dare devil.");

// To print special character we use Escape Character (\).
console.log("I am a bad boy. \\n & i am dare devil.");

//* To know the length of string.
console.log(str1.length);
console.log(fullName1.length);

//* Print specific index character.
let str5 = "Madhur";
console.log(str5[4]);
console.log(str5.charAt(4));

//* Changing the font variant either uppercase or lowercase.
// This will return a new string & it will not change the original string.
let name1 = "Madhur";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());

let nameTemp = name1.toUpperCase();
console.log(nameTemp);
console.log(name1);

//* Searching In String.
let hero = "Hello Coder Army Coder";
//? indexOf(substring): Returns the first occurrence of a substring if it is not found than return -1.
console.log(hero.indexOf("Coder"));
console.log(hero.indexOf("coder"));

//? lastIndexOf(substring): Returns the last occurrence of a substring if it is not found than return -1.
console.log(hero.lastIndexOf("Coder"));
console.log(hero.lastIndexOf("coder"));

//? includes(substring): Checks if a substring exists or not.
console.log(hero.includes("Coder"));
console.log(hero.includes("C"));
console.log(hero.includes("coder"));

//* Extracting Substrings.
let newStr = "HelloDon";
//? slice(start, end): Extracts part of string. It can also take negative index.
console.log(newStr.slice(0, 3)); // It will not include last index which is 3 that's why Hel print instead of Hell.
console.log(newStr.slice(1, 4));

console.log(newStr.slice(-3, -1));
console.log(newStr.slice(-1, -3)); // It will print blank space because always the starting index is comes before end index.
console.log(newStr.slice(-6, 5));

//? substring(start, end): Similar to slice but doesn't accept negative index.
console.log(newStr.substring(0, 3));
console.log(newStr.substring(1, 4));

//? substr(start, end): Extracts a substring of a specified length. It is deprecated.
console.log(newStr.substr(0, 3));

//* Replacing Content.
// It will also create new string & return it, & not change into original string.
let str6 = "Hello Ji Kaise Ho Ji";
//? replace(oldSubstring, newSubstring): Replaces the first match.
console.log(str6.replace("Ji", "Bhailog"));
console.log(str6);

//? replaceAll(oldSubstring, newSubstring): Replaces all matches (ES2021+).
console.log(str6.replaceAll("Ji", "Bhailog"));

//* Splitting Strings.
let str7 = "Money honey sunny funny";
let str8 = "Money! honey! sunny! funny";
//? split(delimiter): Splits a string into an array based on a delimiter. Delimiter means on which basis we want to split an string into array.
console.log(str7.split(" "));
console.log(str8.split("!"));
console.log(str8.split("! "));

//* Trimming Strings
let str9 = "   Hello Ji   ";
//? trim(): Random whitespace from both ends means from starting or end.
console.log(str9);
console.log(str9.length);
console.log(str9.trim());
console.log(str9.trim().length);

//? trimStart()/trimEnd(): Removes whitespace from the start or end.
console.log(str9.trimStart());
console.log(str9.trimStart().length);

console.log(str9.trimEnd());
console.log(str9.trimEnd().length);
