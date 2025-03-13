//? How an object uses another object properties or keys.
let obj1 = {
  name: "Madhur",
  age: 24,
};

let obj2 = {
  amount: 450,
  mobile_no: 7610,
};

console.log(obj1.name);
console.log(obj2.amount);

// But what if we want to access name key through obj2.
console.log(obj2.name); // This will give undefined as an output.

// To give the access of obj1 to obj2.
//! Syntax:- GiveObject.__proto__ = TakeObject;
obj2.__proto__ = obj1;

console.log(obj2.name);
console.log(obj1.amount);

let arr = [10, 20, 30];

console.log(arr.__proto__ == Array.prototype);
console.log(arr.__proto__.__proto__ == Object.prototype);
console.log(Array.prototype.__proto__ == Object.prototype);
console.log(arr.__proto__.__proto__.__proto__ == null);
