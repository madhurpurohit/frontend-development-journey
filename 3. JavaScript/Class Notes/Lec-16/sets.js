//* Set:- A set in JS is a collection of unique values. It allows us to store values without duplicates, which makes it different from arrays.
const set1 = new Set([10, 20, 30, 40, 10, 20, 30]);
console.log(set1);

console.log(typeof set1);

//? Some operation on sets.
const set2 = new Set();

// Add values in set.
set2.add(4);
set2.add(6);
set2.add(10);

console.log(set2);

// To know the size of set.
console.log(set2.size);

// Delete any value.
set2.delete(6);
console.log(set2);

// To know the value is presented inside set or not?
console.log(set2.has(10));

const user_id = new Set([
  "sam_09",
  "madhur_purohit05",
  "peter_parker_97",
  "john_wick_54",
]);
let newUser = "madhur_purohit05";
console.log(user_id.has(newUser));

// To empty any set
set2.clear();
console.log(set2);

//? How to convert array into set?
let arr = [10, 20, 30, 10, 40, 50, 20];
const set3 = new Set(arr);
console.log(set3);

//? How to convert set into array.
let arr1 = [...set3];
console.log(arr1);

//? How to union two set?
let set4 = new Set([10, 20, 30, 40, 50]);
let set5 = new Set([10, 20, 60, 70, 80]);

let set6 = new Set([...set4, ...set5]);
console.log(set6);

//? How to do intersection operation?
const result = [...set4].filter((num) => set5.has(num));
console.log(result);

//? How to iterate over set?
for (let value of set6) {
  console.log(value);
}

set6.forEach((value) => console.log(value));
