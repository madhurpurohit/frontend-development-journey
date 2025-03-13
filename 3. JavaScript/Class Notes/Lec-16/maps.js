//* Map:- it is a collection of key-value pair where both the keys and the values can be any data types, unlike regular JS Objects, a Map maintain the order of its elements based on insertion & allows keys of any type, whereas objects only allow strings or symbols as keys.

//? How to create map?
//! Syntax:- const/let mapName = new Map();
const map1 = new Map();

//? How to insert value in map?
//! mapName.set(key, value);
map1.set(3, 90);
map1.set("Madhur", 45);
map1.set(20, "Purohit");
console.log(map1);

//? How to modify value?
// This is same as insert any value.
map1.set("Madhur", 32); // In this key 'Madhur' is already present so it will modify the value instead of making duplicate key value pair.
console.log(map1);

//? How to delete?
//! mapName.delete(key);
map1.delete(3);
console.log(map1);

//? How to check that an particular key is presented or not?
//! mapName.has(key);
console.log(map1.has("Madhur"));

//? How to know size?
console.log(map1.size);

//? How to empty map?
map1.clear();
console.log(map1);

//* Another method to create map?
// As we know that map is similar like object, so it means we can write key-value pair inside ().
const map2 = new Map([
  [4, "Madhur"],
  ["Sam", "peter"],
  [30, 9],
]);

console.log(map2);

//? How to iterate?
for (let value of map2) {
  console.log(value);
}

for (let [key, value] of map2) {
  console.log(key, value);
}

map2.forEach((value) => console.log(value));

map2.forEach((value, key) => console.log(value, key));
